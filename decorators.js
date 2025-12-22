var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
// ===============================
// 1️⃣ CLASS DECORATOR
// ===============================
function ClassLogger(constructor) {
    console.log("Class Created:", constructor.name);
}
// ===============================
// 2️⃣ PROPERTY DECORATOR
// ===============================
function PropertyLogger(target, propertyKey) {
    console.log("Property Decorated:", propertyKey);
}
// ===============================
// 3️⃣ METHOD DECORATOR
// ===============================
function MethodLogger(target, methodName, descriptor) {
    console.log("Method Decorated:", methodName);
}
// ===============================
// 4️⃣ PARAMETER DECORATOR
// ===============================
function ParameterLogger(target, methodName, parameterIndex) {
    console.log(`Parameter Decorated in method '${methodName}' at index ${parameterIndex}`);
}
// ===============================
// USING ALL DECORATORS
// ===============================
let Student = class Student {
    constructor(name) {
        this.name = name;
    }
    greet(message) {
        console.log(`${message}, I am ${this.name}`);
    }
};
__decorate([
    PropertyLogger
], Student.prototype, "name", void 0);
__decorate([
    MethodLogger,
    __param(0, ParameterLogger)
], Student.prototype, "greet", null);
Student = __decorate([
    ClassLogger
], Student);
// ===============================
// OBJECT CREATION
// ===============================
const s1 = new Student("Divya");
s1.greet("Hello");
export {};
