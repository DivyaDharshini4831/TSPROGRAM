var key; // "id" | "name" | "age"
key = "name"; // ✅
console.log("Keyof example:", key);
// key = "marks"; // ❌ Error
// =====================================
// 2. typeof
// Scenario: Reuse type of a variable
// =====================================
var student1 = { id: 1, name: "Divya" };
var student2 = { id: 2, name: "Ravi" };
console.log("Typeof example:", student2);
var studentName = "Anita";
console.log("Indexed Access example:", studentName);
var optionalStudent = { name: "Divya" };
console.log("Mapped Types example:", optionalStudent);
console.log("Conditional Types Test1:", "Yes (string)");
console.log("Conditional Types Test2:", "No (number)");
// =====================================
// 6. Never Type
// Scenario: Function that never returns
// =====================================
function throwError(message) {
    throw new Error(message);
}
var readonlyStudent = { id: 1, name: "Divya", age: 21 };
var partialStudent = { name: "Ravi" };
var pickedStudent = { name: "Anita", age: 22 };
var omittedStudent = { name: "Ravi", age: 23 };
var studentsRecord = {
    student1: { id: 1, name: "Divya", age: 21 },
    student2: { id: 2, name: "Ravi", age: 22 }
};
console.log("ReadonlyStudent:", readonlyStudent);
console.log("PartialStudent:", partialStudent);
console.log("PickStudent:", pickedStudent);
console.log("OmitStudent:", omittedStudent);
console.log("RecordExample:", studentsRecord);
