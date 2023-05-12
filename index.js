const express = require('express')
const app = express()
const path = require('path')
const hbs = require('hbs')

const puerto = 8084


//servidor de cdontenido estatico
app.use(express.static('public'))

//directorios de vistas de hbs

app.set('views', path.join(__dirname + '/public/views'))
app.set('view engine', 'hbs')

hbs.registerPartials(__dirname + '/public/views/partials')


//configuaracion del directorio que guardara los archivos partialhbs
app.get('/', (req, res) => {
    res.render('home',{
        nombre:'decoraciones \n Lina Tabares'
    })
})

app.get('/productos', (req, res) => {
    res.render('productos',{
        titulo: 'Productos ',
        nombre: 'Paquete de Bodas Lina tabares'
    })
   
})

app.get('/clientes', (req, res) => {
    res.render('productos',{
        titulo: 'Productos ',
        nombre: 'Paquete de Bodas Lina tabares'
    })
   
})


app.listen(puerto, () => {
    console.log(`escuchando por el puerto ${puerto}`)
})