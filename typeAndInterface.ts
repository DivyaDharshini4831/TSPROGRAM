// TYPE ALIAS
type Student = {
    id: number;
    name: string;
    age: number;
};

let student1: Student = {
    id: 1,
    name: "Divya",
    age: 21
};

console.log("Student:", student1);


// INTERFACE
interface Employee {
    empId: number;
    empName: string;
}

let emp1: Employee = {
    empId: 101,
    empName: "Ravi"
};

console.log("Employee:", emp1);


// EXTENDING INTERFACE
interface Person {
    name: string;
    age: number;
}

interface Teacher extends Person {
    subject: string;
}

let teacher1: Teacher = {
    name: "Anita",
    age: 35,
    subject: "Math"
};

console.log("Teacher:", teacher1);


// READONLY PROPERTY
interface Product {
    readonly productId: number;
    productName: string;
}

let product1: Product = {
    productId: 1001,
    productName: "Laptop"
};

// product1.productId = 2002; // ❌ Error: readonly property
product1.productName = "Gaming Laptop"; // ✅ Allowed

console.log("Product:", product1);
