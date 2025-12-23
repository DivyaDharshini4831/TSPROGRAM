class Student {
    // PROPERTIES
    public name: string;              // accessible everywhere
    protected rollNo: number;          // accessible inside class & subclasses
    private marks: number;             // accessible only inside this class
    readonly schoolName: string = "ABC School"; // cannot be changed

    // STATIC MEMBER (shared by all objects)
    static totalStudents: number = 0;

    // CONSTRUCTOR
    constructor(name: string, rollNo: number, marks: number) {
        this.name = name;
        this.rollNo = rollNo;
        this.marks = marks;
        Student.totalStudents++; // increase count for every new student
    }

    // METHOD
    displayInfo(): void {
        console.log("Name:", this.name);
        console.log("Roll No:", this.rollNo);
        console.log("Marks:", this.marks);
        console.log("School:", this.schoolName);
    }

    // METHOD TO ACCESS PRIVATE DATA
    getMarks(): number {
        return this.marks;
    }

    // STATIC METHOD
    static showTotalStudents(): void {
        console.log("Total Students:", Student.totalStudents);
    }
}


// CREATING OBJECTS
let s1 = new Student("Divya", 1, 85);
let s2 = new Student("Ravi", 2, 90);

s1.displayInfo();
console.log("Marks:", s1.getMarks());

s2.displayInfo();

// ACCESSING STATIC MEMBER
Student.showTotalStudents();

// s1.marks = 100;      // ❌ Error: private
// s1.rollNo = 10;      // ❌ Error: protected
// s1.schoolName = "";  // ❌ Error: readonly
