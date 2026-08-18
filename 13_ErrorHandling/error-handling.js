// Error handling brukes for å håndtere feil som kan oppstå i koden.
// Vi kan bruke try/catch blokker for å fange opp feil som oppstår i koden.
// Vi kan også bruke throw for å kaste en feil som vi kan fange opp i en try/catch blokk.
// Det er viktig å håndtere feil på en god måte for å unngå at programmet krasjer eller oppfører seg uventet.



// Vi kan bruke try/catch blokker forå fange opp feil som oppstår i koden.
try {
    // kode som kan feile
} catch (error) {
    // kode som kjører hvis feilen oppstår
}


// eksempel på hvordan vi kan bruke try/catch blokker for å håndtere feil

try {
    // kode som kan feile ved å lese fra en fil som ikke eksisterer
    const data = fs.readFileSync('data.json', "utf8");
    console.log(data);
} catch (error) {
    // kode som kjører hvis feilen oppstår
    // print ut feilmeldingen i konsollen
    console.error(error);
}


// Vi kan også bruke try/catch blokker for å håndtere feil som oppstår i asynkrone funksjoner.
async function loadData() {
    try {
        // kode som kan feile ved å lese fra en fil som ikke eksisterer
        const data = await fs.readFile('data.json', "utf8");
        console.log(data);
    } catch (error) {
        // kode som kjører hvis feilen oppstår
        // print ut feilmeldingen i konsollen
        console.error(error);
    }
}



// Finally blokker kan brukes for å kjøre kode som skal kjøre uansett om det oppstår en feil eller ikke.
try {
    // kode som kan feile
} catch (error) {
    // kode som kjører hvis feilen oppstår
} finally {
    // kode som kjører uansett om det oppstår en feil eller ikke
    console.log("Dette vil alltid kjøre uansett om det oppstår en feil eller ikke.");
}


// Vi kan også bruke throw for å kaste en feil som vi kan fange opp i en try/catch blokk.
function divide(a, b) {
    if (b === 0) {
        // throw new Error for å kaste en feil som vi kan fange opp i en try/catch blokk.
        throw new Error("Kan ikke dele med 0.");
    }
    return a / b;
}