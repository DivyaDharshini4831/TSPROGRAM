"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = calculateAverage;
function calculateAverage() {
    var marks = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        marks[_i] = arguments[_i];
    }
    var total = 0;
    for (var _a = 0, marks_1 = marks; _a < marks_1.length; _a++) {
        var mark = marks_1[_a];
        total += mark;
    }
    return total / marks.length;
}
