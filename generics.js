// =====================================
// 1. GENERIC FUNCTION
// Scenario: Print any type of value
// =====================================
function displayValue(value) {
    console.log("Value:", value);
}
displayValue(100);
displayValue("TypeScript");
displayValue(true);
// =====================================
// 2. GENERIC CLASS
// Scenario: Store student data of any type
// =====================================
var DataStore = /** @class */ (function () {
    function DataStore(data) {
        this.data = data;
    }
    DataStore.prototype.getData = function () {
        return this.data;
    };
    return DataStore;
}());
var studentNameStore = new DataStore("Divya");
var studentAgeStore = new DataStore(21);
console.log("Student Name:", studentNameStore.getData());
console.log("Student Age:", studentAgeStore.getData());
var studentResponse = {
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
function getLength(item) {
    return item.length;
}
console.log("Length of string:", getLength("Hello"));
console.log("Length of array:", getLength([1, 2, 3, 4]));
// getLength(10); // ❌ Error: number has no length
// =====================================
// 5. BUILT-IN GENERICS
// =====================================
// Array<T>
var marks = [85, 90, 78];
console.log("Marks:", marks);
// Promise<T>
// Scenario: Fetch student data
function fetchStudent() {
    return new Promise(function (resolve) {
        setTimeout(function () {
            resolve("Student data loaded");
        }, 1000);
    });
}
fetchStudent().then(function (result) {
    console.log(result);
});
