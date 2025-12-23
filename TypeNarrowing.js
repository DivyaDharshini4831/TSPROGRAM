// ---------- 1. typeof Narrowing ----------
function processValue(value) {
    console.log("\n--- typeof Example ---");
    if (typeof value === "string") {
        console.log("Value is a string");
        console.log("Length:", value.length);
    }
    else {
        console.log("Value is a number");
        console.log("Square:", value * value);
    }
}
processValue("TypeScript");
processValue(10);
// ---------- 2. instanceof Narrowing ----------
var Laptop = /** @class */ (function () {
    function Laptop() {
    }
    Laptop.prototype.code = function () {
        console.log("Coding on laptop");
    };
    return Laptop;
}());
var Mobile = /** @class */ (function () {
    function Mobile() {
    }
    Mobile.prototype.call = function () {
        console.log("Calling from mobile");
    };
    return Mobile;
}());
function useDevice(device) {
    console.log("\n--- instanceof Example ---");
    if (device instanceof Laptop) {
        device.code();
    }
    else {
        device.call();
    }
}
useDevice(new Laptop());
useDevice(new Mobile());
function printPerson(person) {
    console.log("\n--- in Operator Example ---");
    if ("role" in person) {
        console.log("Admin Name:", person.name);
        console.log("Role:", person.role);
    }
    else {
        console.log("User Name:", person.name);
        console.log("Age:", person.age);
    }
}
printPerson({ name: "Divya", role: "Manager" });
printPerson({ name: "Arun", age: 21 });
function isTeacher(person) {
    return person.subject !== undefined;
}
function showDetails(person) {
    console.log("\n--- Custom Type Guard Example ---");
    if (isTeacher(person)) {
        console.log("Teacher Name:", person.name);
        console.log("Subject:", person.subject);
    }
    else {
        console.log("Student Name:", person.name);
        console.log("Grade:", person.grade);
    }
}
showDetails({ name: "Anita", subject: "Math" });
showDetails({ name: "Rahul", grade: 10 });
