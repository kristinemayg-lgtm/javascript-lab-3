let number = 5;

if (number > 0) {
    console.log("The number is positive.");
} else if (number < 0) {
    console.log("The number is negative.");
} else {
    console.log("The number is zero.");
}

let day = 4

switch (day) {
    case 1:
        console.log("Sunday");
        break;
    case 2:
        console.log("Monday");
        break;
    case 3:
        console.log("Tuesday");
        break;
    case 4:
        console.log("Wednesday");
        break;
    case 5:
        console.log("Thursday");
        break;
    case 6:
        console.log("Friday");
        break;
    case 7:
        console.log("Saturday");
        break;
    default:
            console.log("Invalid");
}

for (let i = 1; i <= 5; i++) {
    console.log("print i");
}
let i = 1;

while (i <= 5) {
    console.log("Print i and increment");
    i++;
}

let j = 1;
let k = 1;

do {
    console.log("Print j j++");
    if (k == 3) {
        console.log("Use break here");
        break;
    }  j++; k++;
} while (j <= 5);
 
console.log(i)

if (i === 3) {
    console.log("Use continue here");
}

let globalVar = "I'm global!";

function scopeExample() {
    let localVar = "I'm local!";
    console.log("Inside function:");
    console.log(globalVar);
    console.log(localVar);
}

scopeExample();

console.log("Outside function:");
console.log(globalVar);

