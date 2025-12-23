// =====================================
// 1. GENERIC FUNCTION
// Scenario: Print any type of value
// =====================================
function displayValue<T>(value: T): void {
    console.log("Value:", value);
}

displayValue<number>(100);
displayValue<string>("TypeScript");
displayValue<boolean>(true);


// =====================================
// 2. GENERIC CLASS
// Scenario: Store student data of any type
// =====================================
class DataStore<T> {
    private data: T;

    constructor(data: T) {
        this.data = data;
    }

    getData(): T {
        return this.data;
    }
}

let studentNameStore = new DataStore<string>("Divya");
let studentAgeStore = new DataStore<number>(21);

console.log("Student Name:", studentNameStore.getData());
console.log("Student Age:", studentAgeStore.getData());


// =====================================
// 3. GENERIC INTERFACE
// Scenario: API response format
// =====================================
interface ApiResponse<T> {
    status: string;
    data: T;
}

let studentResponse: ApiResponse<{ id: number; name: string }> = {
    status: "success",
    data: {
        id: 1,
        name: "Divya"
    }
};

console.log("API Response:", studentResponse);


// =====================================
// 4. GENERIC CONSTRAINTS (extends)
// Scenario: Only objects with 'length' allowed
// =====================================
function getLength<T extends { length: number }>(item: T): number {
    return item.length;
}

console.log("Length of string:", getLength("Hello"));
console.log("Length of array:", getLength([1, 2, 3, 4]));
// getLength(10); // ❌ Error: number has no length


// =====================================
// 5. BUILT-IN GENERICS
// =====================================

// Array<T>
let marks: Array<number> = [85, 90, 78];
console.log("Marks:", marks);

// Promise<T>
// Scenario: Fetch student data
function fetchStudent(): Promise<string> {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Student data loaded");
        }, 1000);
    });
}

fetchStudent().then(result => {
    console.log(result);
});
