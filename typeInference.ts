// Type inference with number
let count = 10;      // TypeScript infers this as number
// count = "ten";    // Error: string not allowed
console.log("Count:", count);

// Type inference with string
let message = "Welcome to TypeScript";
console.log("Message:", message);

// Type inference with boolean
let isLoggedIn = false;
console.log("Is Logged In:", isLoggedIn);

// Type inference with array
let numbers = [1, 2, 3, 4];
numbers.push(5);
// numbers.push("six"); // Error
console.log("Numbers:", numbers);

// Type inference with object
let product = {
    name: "Laptop",
    price: 50000
};

console.log("Product:", product);
