// PARENT CLASS
class Person {
    name: string;

    constructor(name: string) {
        this.name = name;
    }

    greet(): void {
        console.log("Hello, my name is", this.name);
    }
}

// CHILD CLASS
class Student extends Person {
    rollNo: number;

    constructor(name: string, rollNo: number) {
        super(name); // call parent constructor
        this.rollNo = rollNo;
    }

    showDetails(): void {
        console.log("Name:", this.name);
        console.log("Roll No:", this.rollNo);
    }
}

// OBJECT CREATION
let student1 = new Student("Divya", 101);
student1.greet();        // inherited method
student1.showDetails(); // child method
