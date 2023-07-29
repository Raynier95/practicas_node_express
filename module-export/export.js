// el modulo.export={} permite exportar elementos para importarlos en otros archivos


const saludar=(nombre)=>{
    return console.log(`Bienvenido ${nombre}`)
}
module.exports={
    saludar:saludar
}
