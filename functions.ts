// FUNCTION PARAMETERS & RETURN TYPE
function add(a: number, b: number): number {
    return a + b;
}
console.log("Add:", add(10, 20));


// OPTIONAL PARAMETER ( ? )
function greet(name: string, age?: number): void {
    if (age !== undefined) {
        console.log(`Hello ${name}, Age: ${age}`);
    } else {
        console.log(`Hello ${name}`);
    }
}
greet("Divya");
greet("Divya", 21);


// DEFAULT PARAMETER
function calculateDiscount(price: number, discount: number = 10): number {
    return price - (price * discount / 100);
}
console.log("Discounted Price:", calculateDiscount(1000));
console.log("Discounted Price:", calculateDiscount(1000, 20));


// REST PARAMETERS ( ... )
function totalMarks(...marks: number[]): number {
    let total = 0;
    for (let mark of marks) {
        total += mark;
    }
    return total;
}
console.log("Total Marks:", totalMarks(80, 90, 85));


// FUNCTION OVERLOADING
function display(value: string): void;
function display(value: number): void;
function display(value: any): void {
    console.log("Display Value:", value);
}
display("TypeScript");
display(100);


// ARROW FUNCTION
const multiply = (x: number, y: number): number => {
    return x * y;
};
console.log("Multiply:", multiply(5, 4));
