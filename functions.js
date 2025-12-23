// FUNCTION PARAMETERS & RETURN TYPE
function add(a, b) {
    return a + b;
}
console.log("Add:", add(10, 20));
// OPTIONAL PARAMETER ( ? )
function greet(name, age) {
    if (age !== undefined) {
        console.log("Hello ".concat(name, ", Age: ").concat(age));
    }
    else {
        console.log("Hello ".concat(name));
    }
}
greet("Divya");
greet("Divya", 21);
// DEFAULT PARAMETER
function calculateDiscount(price, discount) {
    if (discount === void 0) { discount = 10; }
    return price - (price * discount / 100);
}
console.log("Discounted Price:", calculateDiscount(1000));
console.log("Discounted Price:", calculateDiscount(1000, 20));
// REST PARAMETERS ( ... )
function totalMarks() {
    var marks = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        marks[_i] = arguments[_i];
    }
    var total = 0;
    for (var _a = 0, marks_1 = marks; _a < marks_1.length; _a++) {
        var mark = marks_1[_a];
        total += mark;
    }
    return total;
}
console.log("Total Marks:", totalMarks(80, 90, 85));
function display(value) {
    console.log("Display Value:", value);
}
display("TypeScript");
display(100);
// ARROW FUNCTION
var multiply = function (x, y) {
    return x * y;
};
console.log("Multiply:", multiply(5, 4));
