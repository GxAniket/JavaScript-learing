// update element and remove element.

let marks = [10, 20, 30, 40, 50];
console.log(marks);
marks.pop[10];
marks[0] = 60;
console.log(marks);

// using for loop printing all element in array.
let student = ["iron man", "thor", "hulk", "shaktiman", "spiderman", "antman"];
for(let idx = 0; idx < student.length; idx++){
    console.log(student[idx]);
}

// for of loop
let student = ["iron man", "thor", "hulk", "shaktiman", "spiderman", "antman"];
for (let name of student) {
    console.log(name);
}
