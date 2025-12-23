var student1 = {
    id: 1,
    name: "Divya",
    age: 21
};
console.log("Student:", student1);
var emp1 = {
    empId: 101,
    empName: "Ravi"
};
console.log("Employee:", emp1);
var teacher1 = {
    name: "Anita",
    age: 35,
    subject: "Math"
};
console.log("Teacher:", teacher1);
var product1 = {
    productId: 1001,
    productName: "Laptop"
};
// product1.productId = 2002; // ❌ Error: readonly property
product1.productName = "Gaming Laptop"; // ✅ Allowed
console.log("Product:", product1);
