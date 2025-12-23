var marks = [85, 90, 78];
console.log("Marks:", marks);
var subjects = ["Math", "Science", "English"];
console.log("Subjects:", subjects);
var studentInfo;
studentInfo = [101, "Divya", true];
console.log("Student Info:", studentInfo);
var Grade;
(function (Grade) {
    Grade[Grade["A"] = 0] = "A";
    Grade[Grade["B"] = 1] = "B";
    Grade[Grade["C"] = 2] = "C";
    Grade[Grade["D"] = 3] = "D";
})(Grade || (Grade = {}));
var studentGrade = Grade.A;
console.log("Student Grade:", studentGrade);
var student = {
    id: 1,
    name: "Divya",
    isActive: true
};
console.log("Student Object:", student);
