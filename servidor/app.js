// Nota: Se puede eliminar el res.statusCode = 200 ya que es un estandar de Node.js
// Nota: Se debe indagar todo el tema bien a profundidad y practicar con diferentes ejercicios

const http = require('http')
const curso = require('../servidor/cursos.js')

const servidor = http.createServer((req,res)=>{
    // Extraemos el metodo
    const {method} = req
    // Manejamos el metodo (en este caso GET)
    // Se puede manejar con switch o con if

    // if(method==='GET') return manejarSolicitudGET(req,res)
    // else return console.log(`El metodo ${method} no puede ser manejado por el servidor`);

    switch (method) {
        case 'GET':
            return manejarSolicitudGET(req,res)
        case 'POST':
            return manejarSolicitudPOST(req,res)
        default:
            break;
    }
})
// Funcion para manejar solicitudes GET
const manejarSolicitudGET=(req,res)=>{
    // conocemos el path en el cual debemos trabajar
    const path = req.url
    // Ruta general
    if(path==='/'){
        // Vemos el estatus de la pagina
        res.statusCode = 200
        // Enviamos la respuesta
        return res.end('Bienvenido a una prueba de servidor en Node.js')
    }
    // Ruta de cursos
    if(path==='/cursos'){
        res.statusCode = 200
        // Enviamos la respuesta JSON
        return res.end(JSON.stringify(curso.cursos))
    }
    // Ruta de cursos pero en la seccion de programacion
    if(path==='/cursos/programacion'){
        res.statusCode = 200
        return res.end(JSON.stringify(curso.cursos.programacion))
    }
    // En dado caso que el path no exista
    res.statusCode = 404
    return res.end('El recurso solicitado no existe x_x')
}
// Funcion para manejar solicitudes POST (Ejemplo)
const manejarSolicitudPOST=(req,res)=>{
    const path = req.url
    if(path==='/cursos/programacion'){
        res.statusCode = 200
        return res.end('El servidor agrego nuevo contenido')
    }
}

const PORT = 3000
servidor.listen(PORT,()=>{
    console.log(`Servidor a la espera de conexiones en el puerto ${PORT}...`)
})