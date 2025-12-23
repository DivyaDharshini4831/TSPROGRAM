// ---------- 1. typeof Narrowing ----------
function processValue(value: string | number) {
  console.log("\n--- typeof Example ---");

  if (typeof value === "string") {
    console.log("Value is a string");
    console.log("Length:", value.length);
  } else {
    console.log("Value is a number");
    console.log("Square:", value * value);
  }
}

processValue("TypeScript");
processValue(10);


// ---------- 2. instanceof Narrowing ----------
class Laptop {
  code() {
    console.log("Coding on laptop");
  }
}

class Mobile {
  call() {
    console.log("Calling from mobile");
  }
}

function useDevice(device: Laptop | Mobile) {
  console.log("\n--- instanceof Example ---");

  if (device instanceof Laptop) {
    device.code();
  } else {
    device.call();
  }
}

useDevice(new Laptop());
useDevice(new Mobile());


// ---------- 3. in Operator Narrowing ----------
type Admin = {
  name: string;
  role: string;
};

type User = {
  name: string;
  age: number;
};

function printPerson(person: Admin | User) {
  console.log("\n--- in Operator Example ---");

  if ("role" in person) {
    console.log("Admin Name:", person.name);
    console.log("Role:", person.role);
  } else {
    console.log("User Name:", person.name);
    console.log("Age:", person.age);
  }
}

printPerson({ name: "Divya", role: "Manager" });
printPerson({ name: "Arun", age: 21 });


// ---------- 4. Custom Type Guard ----------
type Teacher = {
  name: string;
  subject: string;
};

type Student = {
  name: string;
  grade: number;
};

function isTeacher(person: Teacher | Student): person is Teacher {
  return (person as Teacher).subject !== undefined;
}

function showDetails(person: Teacher | Student) {
  console.log("\n--- Custom Type Guard Example ---");

  if (isTeacher(person)) {
    console.log("Teacher Name:", person.name);
    console.log("Subject:", person.subject);
  } else {
    console.log("Student Name:", person.name);
    console.log("Grade:", person.grade);
  }
}

showDetails({ name: "Anita", subject: "Math" });
showDetails({ name: "Rahul", grade: 10 });
