// ===============================
// UNION TYPES (string | number)
// ===============================
let userInput: string | number;

userInput = "TypeScript";
console.log("User Input (string):", userInput);

userInput = 500;
console.log("User Input (number):", userInput);


// ===============================
// INTERSECTION TYPES (A & B)
// ===============================
type Person = {
    name: string;
};

type Employee = {
    empId: number;
};

// Staff must have BOTH Person and Employee properties
type Staff = Person & Employee;

let staffMember: Staff = {
    name: "Divya",
    empId: 101
};

console.log("Staff Member:", staffMember);


// ===============================
// LITERAL TYPES
// ===============================
let role: "admin" | "user";

role = "admin";
console.log("Role:", role);

role = "user";
console.log("Role:", role);

// role = "guest"; // ❌ Error: Not allowed
