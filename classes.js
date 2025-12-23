var Student = /** @class */ (function () {
    // CONSTRUCTOR
    function Student(name, rollNo, marks) {
        this.schoolName = "ABC School"; // cannot be changed
        this.name = name;
        this.rollNo = rollNo;
        this.marks = marks;
        Student.totalStudents++; // increase count for every new student
    }
    // METHOD
    Student.prototype.displayInfo = function () {
        console.log("Name:", this.name);
        console.log("Roll No:", this.rollNo);
        console.log("Marks:", this.marks);
        console.log("School:", this.schoolName);
    };
    // METHOD TO ACCESS PRIVATE DATA
    Student.prototype.getMarks = function () {
        return this.marks;
    };
    // STATIC METHOD
    Student.showTotalStudents = function () {
        console.log("Total Students:", Student.totalStudents);
    };
    // STATIC MEMBER (shared by all objects)
    Student.totalStudents = 0;
    return Student;
}());
// CREATING OBJECTS
var s1 = new Student("Divya", 1, 85);
var s2 = new Student("Ravi", 2, 90);
s1.displayInfo();
console.log("Marks:", s1.getMarks());
s2.displayInfo();
// ACCESSING STATIC MEMBER
Student.showTotalStudents();
// s1.marks = 100;      // ❌ Error: private
// s1.rollNo = 10;      // ❌ Error: protected
// s1.schoolName = "";  // ❌ Error: readonly
