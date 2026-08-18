// Funksjoner er blokker med kode som kan gjenbrukes flere ganger


// Her definerer vi en funksjon som heter sayHello.
// Vi velger selv hva funksjonen skal hete.
// Koden som står inni funksjonen vil ikke kjøre før vi kaller på funksjonen.
function sayHello() {
    console.log("Hello World!");
}

// Her kaller vi på funksjonen sayHello.
sayHello();


//------------------------------------------


// Funksjoner kan også ta inn parametere.
// Parametere er variabler som vi kan sende inn i funksjonen når vi kaller på den.
// Vi kan ha så mange parametere vi vil, men vi må huske å definere

let name = "John";

// Her definerer vi en funksjon som heter greet, som tar inn en parameter som heter name.
function greet(name) {
    console.log("Hello " + name + "!");
}


//------------------------------------------


// funksjoner kan også returnere en verdi.
let a = 5;
let b = 10;

function add(a, b) {
    return a + b;   // returnerer summen av a og b
}

// Her kaller vi på funksjonen add, og lagrer resultatet i variabelen sum.
let sum = add(a, b);
console.log(sum);


//------------------------------------------


// Vi har også noe som heter arrow functions, som er en kortere måte å skrive funksjoner på.

// Her definerer vi en arrow function som heter multiply, som tar inn to parametere a og b, og returnerer produktet av a og b.
// Arrow functions kan bli identifisert ved at de bruker "=>" istedenfor "function" nøkkelordet.
const multiply = (a, b) => {
    return a * b;
}


// NB! Det er ofte lurt å holde seg til en måte å skrive funksjoner på, enten function eller arrow functions, for å gjøre koden mer lesbar.
// Jeg anbefaler å bruke function nøkkelordet i de fleste tilfeller
// Dette er fordi function nøkkelordet er mer kjent og lettere å forstå for de fleste som leser koden din.