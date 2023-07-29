// Se usa stringify para transformar un objeto en cadena
// Se usa parse para transformar una cadena en un objeto

// Objeto a Cadena
const practica = require('../JSON/elementos.json')
console.log(JSON.stringify(practica)) //se usa stringify

const infoPractica = JSON.stringify(practica)
console.log(JSON.parse(infoPractica))
