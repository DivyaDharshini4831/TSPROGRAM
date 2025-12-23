"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var student_1 = require("./student");
var s1 = { id: 1, name: "Divya", age: 21 };
(0, student_1.greetStudent)(s1);
var utils_1 = require("./utils");
var avg = (0, utils_1.default)(85, 90, 78);
console.log("Average Marks:", avg);
