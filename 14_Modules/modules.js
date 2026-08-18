// Modules er en måte å organisere koden på i javascript.
// Vi kan lage egne moduler som vi kan importere i andre filer.
// Vi kan også bruke moduler som er laget av andre.


// Det er to måter å lage moduler på i javascript.
// 1. CommonJS moduler (require og module.exports)
// 2. ES6 moduler (import og export)


// Jeg anbefaler å bruke ES6 moduler, da det er den nyeste måten å lage moduler på i javascript.
// Det er også den måten som brukes i moderne javascript rammeverk som React, Vue og Angular.
// For å bruke ES6 moduler må vi endre "type": "commonjs", til "type": "module", i package.json.


// For eksportere en funksjon eller variabel fra en modul bruker vi export nøkkelordet.

export function add(a, b) {
    return a + b;
}


// Forå importere en funksjon eller variabel fra en modul bruker vi import nøkkelordet.
import { add } from "./modules.js";

// vi kan eksportere/importere flere funksjoner eller variabler fra en modul.
// bare å bruke export nøkkelordet foran hver funksjon eller variabel vi vil eksportere.
import { add, subtract, multiply } from "./modules.js";


// En annen måte å eksportere/importere en funksjon ved å bruke default nøkkelordet.
// Vi kan bare ha en default eksport per modul.
// Vi kan importere default eksporten med et hvilket som helst navn vi vil.
function sayHello(name) {
    return `Hello ${name}`;
}

export default sayHello;

// For å importere default eksporten bruker vi import nøkkelordet og et hvilket som helst navn vi vil.
import saySomething from "./modules.js";