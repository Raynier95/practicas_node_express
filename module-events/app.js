// El ejercicio aquí mostrado fue tomado de la pagina: 
// https://nodejs.dev/en/learn/the-nodejs-event-emitter/

const EventEmitter = require('events') //Se requiere el modulo
const eventEmitter = new EventEmitter()
eventEmitter.on('start',(start,end)=>{
  console.log(`Started from ${start}, end in ${end}`)
})
eventEmitter.emit('start',1,100)