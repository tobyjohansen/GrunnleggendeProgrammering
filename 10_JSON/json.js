
// Json er et format for å lagre og utveksle data.
// Det er basert på javascript-objekter, men det er små forskjeller mellom dem. 


const json = '{"name":"Anna","age":17}';

// Vi kan bruke JSON.parse() for å konvertere en JSON-streng til et javascript-objekt.
const person = JSON.parse(json);
console.log(person);


const student = {
    name: "Ola",
    age: 25,
}


// Vi kan bruke JSON.stringify() for å konvertere et javascript-objekt til en JSON-streng.
const jsonString = JSON.stringify(student);
console.log(jsonString);