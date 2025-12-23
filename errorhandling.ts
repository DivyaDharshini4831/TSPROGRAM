function divide(a: number, b: number): number {
  try {
    if (b === 0) {
      throw new Error("Division by zero is not allowed");
    }
    return a / b;
  } catch (error) {
    console.log("Error occurred:", (error as Error).message);
    return 0; // safe fallback value
  }
}

console.log("Result:", divide(10, 2));
console.log("Result:", divide(10, 0));
