import { Student, greetStudent } from "./student";

const s1: Student = { id: 1, name: "Divya", age: 21 };
greetStudent(s1);
import calculateAverage from "./utils";

const avg = calculateAverage(85, 90, 78);
console.log("Average Marks:", avg);
