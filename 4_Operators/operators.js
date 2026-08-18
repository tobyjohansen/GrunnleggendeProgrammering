let a = 10;
let b = 5;

a + b; // Addition:                                          10 + 5 = 15
a - b; // Subtraction:                                       10 - 5 = 5
a * b; // Multiplication:                                    10 * 5 = 50
a / b; // Division:                                          10 / 5 = 2
a % b; // Modulus: Remainder of division                     10 % 3 = 1
a ** b; // Exponentiation: a raised to the power of b        10^5 = 100000


5 === 5; // Strict equality: true
5 !== 5; // Strict inequality: false
5 > 10; // Greater than: false
5 < 10; // Less than: true
5 >= 10; // Greater than or equal to: false
5 <= 10; // Less than or equal to: true


// Javascript foretrekker å bruke === for å sammenligne verdier, da det også sjekker datatypen.


// Logical AND: true if both operands are true
true && true; // true
true && false; // false

// Logical OR: true if at least one operand is true
true || false; // true
false || false; // false


// Kombinere operatorer
let age = 25;
let isAdult = age >= 18 && age <= 65; // true, fordi 25 er mellom 18 og 65