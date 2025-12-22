// ===============================
// 1️⃣ CLASS DECORATOR
// ===============================
function ClassLogger(constructor: Function) {
  console.log("Class Created:", constructor.name);
}

// ===============================
// 2️⃣ PROPERTY DECORATOR
// ===============================
function PropertyLogger(target: any, propertyKey: string) {
  console.log("Property Decorated:", propertyKey);
}

// ===============================
// 3️⃣ METHOD DECORATOR
// ===============================
function MethodLogger(
  target: any,
  methodName: string,
  descriptor: PropertyDescriptor
) {
  console.log("Method Decorated:", methodName);
}

// ===============================
// 4️⃣ PARAMETER DECORATOR
// ===============================
function ParameterLogger(
  target: any,
  methodName: string,
  parameterIndex: number
) {
  console.log(
    `Parameter Decorated in method '${methodName}' at index ${parameterIndex}`
  );
}

// ===============================
// USING ALL DECORATORS
// ===============================
@ClassLogger
class Student {

  @PropertyLogger
  name: string;

  constructor(name: string) {
    this.name = name;
  }

  @MethodLogger
  greet(@ParameterLogger message: string) {
    console.log(`${message}, I am ${this.name}`);
  }
}

// ===============================
// OBJECT CREATION
// ===============================
const s1 = new Student("Divya");
s1.greet("Hello");

export {}; // important
