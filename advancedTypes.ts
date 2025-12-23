// =====================================
// 1. keyof
// Scenario: Access property names of Student
// =====================================
type Student = {
    id: number;
    name: string;
    age: number;
};

let key: keyof Student; // "id" | "name" | "age"
key = "name"; // ✅
console.log("Keyof example:", key);

// key = "marks"; // ❌ Error


// =====================================
// 2. typeof
// Scenario: Reuse type of a variable
// =====================================
let student1 = { id: 1, name: "Divya" };
type StudentType = typeof student1;

let student2: StudentType = { id: 2, name: "Ravi" };
console.log("Typeof example:", student2);


// =====================================
// 3. Indexed Access Types
// Scenario: Access type of a property
// =====================================
type StudentNameType = Student["name"]; // string
let studentName: StudentNameType = "Anita";
console.log("Indexed Access example:", studentName);


// =====================================
// 4. Mapped Types
// Scenario: Make all student properties optional
// =====================================
type OptionalStudent = {
    [P in keyof Student]?: Student[P];
};

let optionalStudent: OptionalStudent = { name: "Divya" };
console.log("Mapped Types example:", optionalStudent);


// =====================================
// 5. Conditional Types
// Scenario: Check if type is string
// =====================================
type IsString<T> = T extends string ? "Yes" : "No";

type Test1 = IsString<string>; // "Yes"
type Test2 = IsString<number>; // "No"

console.log("Conditional Types Test1:", "Yes (string)");
console.log("Conditional Types Test2:", "No (number)");


// =====================================
// 6. Never Type
// Scenario: Function that never returns
// =====================================
function throwError(message: string): never {
    throw new Error(message);
}
// throwError("This is an error"); // Uncomment to test


// =====================================
// 7. Utility Types
// Scenario: Work with student data in different ways
// =====================================

type ReadonlyStudent = Readonly<Student>;
const readonlyStudent: ReadonlyStudent = { id: 1, name: "Divya", age: 21 };
// readonlyStudent.id = 2; // ❌ Error

type PartialStudent = Partial<Student>;
let partialStudent: PartialStudent = { name: "Ravi" };

type PickStudent = Pick<Student, "name" | "age">;
let pickedStudent: PickStudent = { name: "Anita", age: 22 };

type OmitStudent = Omit<Student, "id">;
let omittedStudent: OmitStudent = { name: "Ravi", age: 23 };

type RecordExample = Record<"student1" | "student2", Student>;
let studentsRecord: RecordExample = {
    student1: { id: 1, name: "Divya", age: 21 },
    student2: { id: 2, name: "Ravi", age: 22 }
};

console.log("ReadonlyStudent:", readonlyStudent);
console.log("PartialStudent:", partialStudent);
console.log("PickStudent:", pickedStudent);
console.log("OmitStudent:", omittedStudent);
console.log("RecordExample:", studentsRecord);
