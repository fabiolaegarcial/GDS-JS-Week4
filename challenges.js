// VERY EASY 
function min(val1, val2){
    return Math.min(val1, val2);
}
console.log("VERY EASY:  Run the function min(#, ) on the console.");

// EASY
// [0] lastName  -  [1] firstName  -  [2] age
var student1 = ["Doe", "John", "20"];
var student2 = ["Smith", "Jane", "19"];
var student3 = ["Thompson", "Jack", "21"];
var studentArray = [student1, student2, student3];

console.log(`EASY:  Hello, my name is ${studentArray[1][1]} ${studentArray[1][0]} and I'm ${studentArray[1][2]} years old.`);

// MEDIUM
function numMonth(num){
    if (num < 1 || num > 12){
        return "Invalid Month Number."
    } else {
        var monthsArray = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
        return monthsArray[num - 1];
    }
}
console.log("MEDIUM:  Run the function numMonth(#) in the console.");

// HARD
var tomHeight = 9;
var tomMass = 8;
var jerryHeight = 10;
var jerryMass = 45;
    //BMI calculation
var tomBMI = tomMass / Math.pow(tomHeight, 2);
var jerryBMI = jerryMass / Math.pow(jerryHeight, 2);

console.log(`HARD:  Is Tom’s BMI higher than Jerry’s? ${tomBMI > jerryBMI}`);