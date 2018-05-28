let a = prompt('Podaj liczbę a');
let b = prompt('podaj liczbę b');

let multiply = (x, y) => (a * (b || 1));


console.log(multiply(a, b));