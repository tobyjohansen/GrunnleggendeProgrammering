// Loops gir oss mulighet til å kjøre en blokk med kode flere ganger.
// Det finnes flere typer loops i JavaScript, men de mest brukte er for-loops og while-loops.


// For-loop brukes når vi vet hvor mange ganger vi vil kjøre koden.

/*
for ( start; condition; update ) {
    // code to be executed
}
*/
// for ( opprette variabel; betingelse; oppdatering av variabel )
// Koden inni for-loopen vil kjøre så lenge betingelsen er sann.
// I dette eksempelet vil koden inni for-loopen kjøre 5 ganger, og i hver iterasjon vil variabelen i øke med 1.

for (let i = 0; i < 5; i++) {
    console.log("This is iteration number " + i);
}



// While-loop brukes når vi ikke vet hvor mange ganger vi vil kjøre koden,
// men vi vil fortsette å kjøre koden så lenge en betingelse er sann.

let number = 0;

while (number < 5) {
    console.log("This is iteration number " + number);
    number++;
}



// break statement kan brukes til å stoppe en loop før den har kjørt ferdig.

let count = 0;

// I dette eksempelet vil loopen stoppe når count er lik 5, selv om betingelsen for loopen er at count skal være mindre enn 5.
for (let i = 0; i < 10; i++) {

    if (i === 5) {
        console.log("Breaking the loop at iteration number " + i);
        break; // Stopper loopen når i er lik 5
    }

    console.log("number " + i);
    
}



// continue statement kan brukes til å hoppe over en iterasjon i loopen.

for (let i = 0; i < 10; i++) {

    if (i === 5) {
        console.log("Skipping iteration number " + i);
        continue; // Hopper over resten av koden i denne iterasjonen når i er lik 5
    }

    // Koden her vil ikke kjøre når i er lik 5, fordi continue statement hopper over resten av koden i denne iterasjonen.
    console.log("number " + i);
}