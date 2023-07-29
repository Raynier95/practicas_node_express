// El modulo timers contiene los modulos de tiempo
// SetTimeout(funcion,retraso,argumentos)
// setInterval(funcion,intervalo,argumentos)
// setImmediate(funcion,argumentos)

// SetTimeout
setTimeout(() => {
    console.log('HEllO')
},4000);

// SetInterval
setInterval(() => {
    console.log('HEllO')
},4000);

// SetImmediate
setImmediate(()=>{
    console.log('HELLO')
})