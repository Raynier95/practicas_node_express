// Las promesas es un objeto que representa el evuantual
// resultado o error de una operacion asíncrona
const delay=(ms)=>{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve(`La promesa fue existosa, se resolvio en ${ms} milisegundos`)
        },ms)
    })
}
delay(4500)
.then(res=>{
    console.log(res)
})
.catch(err=>{
    console.log(err)
})
