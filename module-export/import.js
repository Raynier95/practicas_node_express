// para importar un archivo exportado por module.exports={} se usa destructuracion

const {saludar} = require('../module-export/export.js') //requerimos el archivo 
console.log(saludar('Pedro'))