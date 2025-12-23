// Type inference with number
var count = 10; // TypeScript infers this as number
// count = "ten";    // Error: string not allowed
console.log("Count:", count);
// Type inference with string
var message = "Welcome to TypeScript";
console.log("Message:", message);
// Type inference with boolean
var isLoggedIn = false;
console.log("Is Logged In:", isLoggedIn);
// Type inference with array
var numbers = [1, 2, 3, 4];
numbers.push(5);
// numbers.push("six"); // Error
console.log("Numbers:", numbers);
// Type inference with object
var product = {
    name: "Laptop",
    price: 50000
};
console.log("Product:", product);
