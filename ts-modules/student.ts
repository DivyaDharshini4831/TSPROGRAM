export type Student = {
    id: number;
    name: string;
    age: number;
};

export function greetStudent(student: Student): void {
    console.log(`Hello ${student.name}, Age: ${student.age}`);
}
