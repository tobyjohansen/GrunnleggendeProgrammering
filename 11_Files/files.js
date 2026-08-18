
// fs = file system
// fs er en innebygd modul i Node.js som lar oss jobbe med filer.
// Vi kan bruke fs til å lese og skrive filer, samt utføre andre filoperasjoner.

// For å bruke fs, må vi først importere det ved å bruke require().
const fs = require('fs');



// Vi bruker fs.readFileSync() funksjonen for å lese innholdet i en fil.
// Funksjonen tar to argumenter: filnavnet og et format for å spesifisere hvordan vi vil lese filen.
const data = fs.readFileSync('people.json', "utf8"); // Leser innholdet i filen people.json og lagrer det i variabelen data

console.log(data); // Skriver ut innholdet i filen people.json


// vi kan bruke JSON.parse() for å konvertere JSON-strengen til et JavaScript-objekt.
const people = JSON.parse(data); // Konverterer JSON-strengen til et JavaScript-objekt

console.log(people[0].name); // Skriver ut navnet til den første personen i people.json

// Her brukte vi både det vi lærte fra json, men også arrays og objekter for å hente ut navnet til den første personen.



// ------------------


// Vi kan også bruke fs.writeFileSync() funksjonen for å skrive til en fil.
// Funksjonen tar to argumenter: filnavnet og innholdet vi vil skrive til filen.
fs.writeFileSync('output.txt', 'Hello, world!'); // Skriver "Hello, world!" til filen output.txt


// vi kan også bruke det vi lærte fra json med å konvertere et JavaScript-objekt til en JSON-streng ved å bruke JSON.stringify() funksjonen.
const newPerson = {
    name: "John Doe",
    age: 30,
    city: "New York"
};

const jsonString = JSON.stringify(newPerson); // Konverterer JavaScript-objektet til en JSON-streng
fs.writeFileSync('newPerson.json', jsonString); // Skriver JSON-strengen til filen newPerson.json

// Dette er slik vi lagrer en json fil.


// ------------------

// vi kan også bruke fs.appendFileSync() funksjonen for å legge til innhold i en fil uten å overskrive det som allerede er der.
fs.appendFileSync('output.txt', '\nThis is a new line.'); // Legger til en ny linje i filen output.txt