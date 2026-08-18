// Noen funksjoner i javascript er enten asynkrone eller synkrone.
// Her kan vi bruke asynkrone versjonen av fs.readFile() funksjonen som er en del av fs modulen i Node.js.
// Async versjonen av fs.readFile()
const fs = require("fs/promises");


// Async/Await er en måte å håndtere asynkrone operasjoner i javascript.
// Vi kan lage en funksjon som kan kjøre i "bakgrunnen" uten å blokkere resten av koden.

// For å bruke async/await, må vi først lage en funksjon som er merket med "async".
async function fetchData() {
    // Inne i den asynkrone funksjonen kan vi bruke "await" for å vente på at en asynkron operasjon skal fullføres.
    // for eksempel kan vi lese data fra en json fil ved å bruke fs.readFileSync() funksjonen, 
    // men vi må bruke "await" for å vente på at filen skal bli lest ferdig.
    const data = await fs.readFile('data.json', "utf8");

    // NB! Siden vi skal bruke "await" må vi bruke fs.readFile() som er en asynkron funksjon, og ikke fs.readFileSync() som er en synkron funksjon.


    // Med Await så vil ikke console.log(data) kjøre før fs.readFileSync() funksjonen er ferdig med å lese filen.
    // Samtidig som andre funksjoner i koden kan kjøre.

    console.log(data); // Skriver ut dataen som ble lest fra filen data.json
}


function calculateSum(a, b) {
    return a + b;
}


fetchData(); // Kaller den asynkrone funksjonen fetchData()

// CalculateSum funksjonen trenger ikke å vente på at fetchData() funksjonen skal fullføres, 
// så den kan kjøre samtidig som fetchData() funksjonen kjører.
const sum = calculateSum(5, 10);

// Siden calculateSum() funksjonen er synkron, vil console.log(sum) kjøre umiddelbart etter at calculateSum() funksjonen er ferdig.
// Siden fetchData() leser fra fil og tar litt tid vil console.log(sum) kjøre før console.log(data) i fetchData() funksjonen.
// vi får da resultatet 15 før vi får dataen fra filen data.json.

console.log(sum);