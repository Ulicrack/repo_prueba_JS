const { suma, resta, multiplicar } = require('./math');

console.assert(suma(2, 3) === 5, 'Error en suma');
console.assert(resta(5, 3) === 2, 'Error en resta');
console.assert(multiplicar(2, 4) === 8, 'Error en multiplicar');

console.log("✅ Todos los tests pasaron");