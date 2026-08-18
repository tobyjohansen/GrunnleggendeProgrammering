// Objekter er en annen måte å lagre en samling av data i JavaScript. 
// Objekter består av nøkkel-verdi-par, der nøkkelen er en streng og verdien kan være hvilken som helst datatype.



// F.eks her er et objekt som representerer en person:
// name: er nøkkelen
// "Ola" er verdien
let person = {
    name: "Ola",
    age: 25,
    city: "Oslo"
};



// For å få tilgang til en verdi i et objekt, kan vi bruke enten dot notation eller bracket notation.
console.log(person.name);
console.log(person["age"]);



// Vi kan også endre en verdi i et objekt ved å bruke dot notation eller bracket notation.
person.age = 26;
person["city"] = "Bergen";



// Vi kan også legge til en ny nøkkel-verdi-par i et objekt.
person.country = "Norway";
person["job"] = "Developer";



// Objecter brukes ofte sammen med arrays for å lagre mer komplekse datastrukturer.
// F.eks her er en array som inneholder flere personer:
let people = [
    {
        name: "Ola",
        age: 25,
        city: "Oslo"
    },
    {
        name: "Kari",
        age: 30,
        city: "Bergen"
    }
];



// Vi kan bruke en for-løkke for å iterere gjennom alle personene i arrayen og skrive ut navnet deres.
for ( let person of people) {

    // skriver ut objektet til hver person i arrayen
    console.log(person);

    // skriver ut navnet til hver person i arrayen
    console.log(person.name);
}