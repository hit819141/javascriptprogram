let student = {
    name: "Hit Bhalodiya",
    email: "User05@EMAIL.COM",
    course: "Javascript, React, Node",
    marks: [45,78,60,90,33],
    hobbies: ['Music','Cricket','Reading'],
    address: ["India", ["Gujrat", "Ahmedabad"]]  
};

// STRING OPERATIONS
let trimmedName = student.name.trim();
console.log("Trimmed Name:", trimmedName);
let upperCaseName = trimmedName.toUpperCase();
console.log("Uppercase Name:", upperCaseName);

let lowerCaseEmail = student.email.toLowerCase();
console.log("Lowercase Email:", lowerCaseEmail);

let hasReact = student.course.includes("React");
console.log("Course includes React:", hasReact);
 
let nodeIndex = student.course.indexOf("Node");
console.log("Index of Node in course:", nodeIndex);

let updatedCourse = student.course.replace("Javascript", "JS");
console.log("Updated Course:", updatedCourse);

let courseArray = student.course.split(", ");
console.log("Course Array:", courseArray);

console.log("Length of Student's Name:", student.name.length);

// ARRAY OPERATIONS
student.hobbies.push("Swimming");
console.log("Hobbies after push:", student.hobbies);

student.hobbies.pop();
console.log("Hobbies after pop:", student.hobbies);

student.hobbies.unshift("Drawing");
console.log("Hobbies after unshift:", student.hobbies);

student.hobbies.shift();
console.log("Hobbies after shift:", student.hobbies);

let mergedArray = student.hobbies.concat(courseArray);
console.log("Merged Array:", mergedArray);

let courseIncludesReact = courseArray.includes("React");
console.log("Course array includes React:", courseIncludesReact);

let jsIndex = courseArray.indexOf("JS");
console.log("Index of JS in course array:", jsIndex);

let firstTwoMarks = student.marks.slice(0, 2);
console.log("First two marks:", firstTwoMarks);

let failedIndex = student.marks.findIndex(mark => mark < 40);
if (failedIndex !== -1) {
    student.marks.splice(failedIndex, 1);
}

console.log("Marks after removing first failed mark:", student.marks);
 
let hobbiesString = student.hobbies.join(", ");
console.log("Hobbies String:", hobbiesString);

// ARRAY ITERATION METHODS
let bonusMarks = student.marks.map(mark => mark + 5);
console.log("Marks after adding bonus:", bonusMarks);

let passedMarks = student.marks.filter(mark => mark >= 40);
console.log("Passed Marks:", passedMarks);
 
let highMark = student.marks.find(mark => mark > 80);
console.log("First mark above 80:", highMark);

console.log("Student Hobbies:");
student.hobbies.forEach(hobby => console.log(hobby));

let sortedMarks = [...student.marks].sort((a, b) => a - b);
console.log("Sorted Marks (Ascending):", sortedMarks);

let reversedHobbies = [...student.hobbies].reverse();
console.log("Reversed Hobbies:", reversedHobbies);

let flattenedAddress = student.address.flat();
console.log("Flattened Address:", flattenedAddress);

// OBJECT HANDLING  
let allPassed = student.marks.every(mark => mark >= 40);
student.result = allPassed ? "pass" : "fail";
console.log("Student Result:", student.result);

console.log("Final Student Object:", student);