// If Statement med kombinerte logiske operatorer

let isTeacher = true;
let isStudent = false;



// Du er en lærer og ikke en student, så du får tilgang til lærerloungen.
if (isTeacher && !isStudent) {
    console.log("You are allowed to enter the teacher's lounge.");
}

// Du er en student eller en lærer, så du får tilgang til klasserommet.
if (isTeacher || isStudent) {
    console.log("You are allowed to enter the classroom.");
}



// Nested if statements kan brukes til å sjekke flere betingelser.

let isAdmin = true;
let isLoggedIn = true;

if (isLoggedIn) {
    if (isAdmin) {
        console.log("You are allowed to access the admin panel.");
    }
}



// Switch statement kan brukes til å sjekke flere betingelser på en mer ryddig måte.

let day = "tirsdag";

switch (day) {
    case "mandag":
        console.log("Today is Monday.");
        break;
    case "tirsdag":
        console.log("Today is Tuesday.");
        break;
    case "onsdag":
        console.log("Today is Wednesday.");
        break;
    default:
        console.log("Invalid day.");
}



// Ternary operator kan brukes til å sjekke en betingelse på en mer kompakt måte.

let isRaining = true;

// variabel = condition ? valueIfTrue : valueIfFalse;
let weatherMessage = isRaining ? "It's raining, take an umbrella." : "It's not raining, enjoy the sunshine.";

