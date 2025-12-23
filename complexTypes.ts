
let marks: number[] = [85, 90, 78];
console.log("Marks:", marks);

let subjects: Array<string> = ["Math", "Science", "English"];
console.log("Subjects:", subjects);
let studentInfo: [number, string, boolean];
studentInfo = [101, "Divya", true];
console.log("Student Info:", studentInfo);
enum Grade {
    A,
    B,
    C,
    D
}

let studentGrade: Grade = Grade.A;
console.log("Student Grade:", studentGrade); 
let student: {
    id: number;
    name: string;
    isActive: boolean;
} = {
    id: 1,
    name: "Divya",
    isActive: true
};

console.log("Student Object:", student);
