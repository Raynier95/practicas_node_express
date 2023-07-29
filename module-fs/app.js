// El modulo fs nos permite realizar modificaciones en el sistema de archivos
// Este modulo se puede usar tanto de manera sincrona como asincrona
// Para usar el modulo de manera sincrona se añade un sync a su nombre


// PARA LEER UN ARCHIVO
const fs = require('fs') // requerimos el modulo
fs.readFile('../module-fs/index.html','utf-8',(err,cont)=>{
    if(err) throw err 
    else console.log(cont)
})

// PARA RENOMBRAR UN ARCHIVO
fs.rename('../module-fs/index.html','main.html',(err)=>{
    if(err) throw err
    else console.log('Archivo renombrado exitosamente')
})

// PARA REEMPLAZAR EL CONTENIDO DEL ARCHIVO
fs.writeFile('../module-fs/index.html','contenido',(err)=>{
    if(err) throw err
    else console.log('Contenido reemplazado exitosamente')
})

// PARA ELIMINAR UN ARCHIVO
fs.unlink('../module-fs/index.html',(err)=>{
    if(err) throw err
    else console.log('Archivo eliminado exitosamente')
})