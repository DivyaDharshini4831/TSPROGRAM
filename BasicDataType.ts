
let age: number = 21;
console.log("Age:", age);
let studentName: string = "Divya";
console.log("Name:", studentName);
let isPassed: boolean = true;
console.log("Passed:", isPassed);
let value: any = 10;
value = "Hello";
value = true;
console.log("Any value:", value);
let data: unknown = "TypeScript";
if (typeof data === "string") {
    console.log("Unknown value length:", data.length);
}
function greet(): void {
    console.log("Welcome to TypeScript");
}
greet();
let emptyValue: null = null;
let notAssigned: undefined = undefined;

console.log("Null value:", emptyValue);
console.log("Undefined value:", notAssigned);
