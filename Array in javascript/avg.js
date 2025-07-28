// find the avg of the marks in given array 
let marks = [80, 25, 38, 49, 55,];
let Average = 0;
for (let i = 0; i < marks.length; i++) {
    Average += marks[i];
}
Average /= marks.length;
console.log("Average marks:", Average);
