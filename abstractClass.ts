// ABSTRACT CLASS
abstract class Shape {

    // ABSTRACT METHOD (no body)
    abstract area(): number;

    // NORMAL METHOD
    display(): void {
        console.log("This is a shape");
    }
}

// CHILD CLASS
class Rectangle extends Shape {
    length: number;
    breadth: number;

    constructor(length: number, breadth: number) {
        super();
        this.length = length;
        this.breadth = breadth;
    }

    // IMPLEMENTING ABSTRACT METHOD
    area(): number {
        return this.length * this.breadth;
    }
}

// OBJECT CREATION
let rect = new Rectangle(10, 5);
rect.display();
console.log("Area of Rectangle:", rect.area());

// let s = new Shape(); // ❌ Error: Cannot create object of abstract class
