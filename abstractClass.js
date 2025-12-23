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
// ABSTRACT CLASS
var Shape = /** @class */ (function () {
    function Shape() {
    }
    // NORMAL METHOD
    Shape.prototype.display = function () {
        console.log("This is a shape");
    };
    return Shape;
}());
// CHILD CLASS
var Rectangle = /** @class */ (function (_super) {
    __extends(Rectangle, _super);
    function Rectangle(length, breadth) {
        var _this = _super.call(this) || this;
        _this.length = length;
        _this.breadth = breadth;
        return _this;
    }
    // IMPLEMENTING ABSTRACT METHOD
    Rectangle.prototype.area = function () {
        return this.length * this.breadth;
    };
    return Rectangle;
}(Shape));
// OBJECT CREATION
var rect = new Rectangle(10, 5);
rect.display();
console.log("Area of Rectangle:", rect.area());
// let s = new Shape(); // ❌ Error: Cannot create object of abstract class
