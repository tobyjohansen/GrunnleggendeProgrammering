
// Arrays er en måte å lagre en samling av data i JavaScript.

let fruits = ["apple", "banana", "cherry"]; // Her lagrer vi en array med tre elementer
let numbers = [1, 2, 3]; // Her lagrer vi en array med tre elementer


// For å printe ut hele arrayen, kan vi bruke console.log().
console.log(fruits);


// For å få tilgang til et element i en array, bruker vi indekser. Indekser starter på 0.
console.log(fruits[0]); // Skriver ut "apple"
console.log(fruits[1]); // Skriver ut "banana"
console.log(fruits[2]); // Skriver ut "cherry"


// Vi kan også endre et element i en array ved å bruke indekser.
fruits[1] = "blueberry";
console.log(fruits); // Skriver ut ["apple", "blueberry", "cherry"]


// Vi kan også legge til et element i en array ved å bruke metoden push().
fruits.push("orange");
console.log(fruits); // Skriver ut ["apple", "blueberry", "cherry", "orange"]


// Vi kan også fjerne et element i en array vedå bruke metoden pop().
fruits.pop();   // Fjerner det siste elementet i arrayen
console.log(fruits); // Skriver ut ["apple", "blueberry", "cherry"]


// Vi kan også legge til et element i starten av en array ved å bruke metoden unshift().
fruits.unshift("kiwi");
console.log(fruits); // Skriver ut ["kiwi", "apple", "blueberry", "cherry"]


// Vi kan også fjerne et element i starten av en array ved å bruke metoden shift().
fruits.shift();
console.log(fruits); // Skriver ut ["apple", "blueberry", "cherry"]


// ----------------


// Vi kan bruke .length for å finne ut hvor mange elementer som er i en array.
console.log(fruits.length); // Skriver ut 3


// Vi kan bruke en for-løkke for å iterere gjennom alle elementene i en array.
// Enten kan vi bruke en tradisjonell for-løkke:
for (let i = 0; i < fruits.length; i++) {
    console.log(fruits[i]); // Skriver ut hvert element i arrayen
}

// Eller en for-of-løkke:
for (let fruit of fruits) {
    console.log(fruit); // Skriver ut hvert element i arrayen
}


// Viktige metoder for arrays:
fruits.push("Apple");       // Add
fruits.pop();               // Remove last
fruits.includes("Banana");  // Check if it exists
fruits.indexOf("Banana");   // Find position

