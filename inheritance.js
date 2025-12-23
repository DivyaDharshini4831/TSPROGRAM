var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
// PARENT CLASS
var Person = /** @class */ (function () {
    function Person(name) {
        this.name = name;
    }
    Person.prototype.greet = function () {
        console.log("Hello, my name is", this.name);
    };
    return Person;
}());
// CHILD CLASS
var Student = /** @class */ (function (_super) {
    __extends(Student, _super);
    function Student(name, rollNo) {
        var _this = _super.call(this, name) || this; // call parent constructor
        _this.rollNo = rollNo;
        return _this;
    }
    Student.prototype.showDetails = function () {
        console.log("Name:", this.name);
        console.log("Roll No:", this.rollNo);
    };
    return Student;
}(Person));
// OBJECT CREATION
var student1 = new Student("Divya", 101);
student1.greet(); // inherited method
student1.showDetails(); // child method
