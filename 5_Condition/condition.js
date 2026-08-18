


// If statement are used to check if a conditon is true or false.
// Code runs if the condition is true, and is skipped if the condition is false.
let age = 20;

if (age >= 18) {
    console.log("You are allowed to enter the concert.");
}



// If statement can also be used with an else statement to run code if the condition is false.
let hasTicket = false;

if (hasTicket) {
    console.log("You are allowed to enter the concert.");
} else {
    console.log("You are not allowed to enter the concert.");
}



// If statement can also be used with an else if statement to check multiple conditions.
let isVIP = true;

if (age >= 18 && hasTicket) {
    console.log("You are allowed to enter the concert.");
} else if (isVIP) {
    console.log("You are allowed to enter the concert.");
}