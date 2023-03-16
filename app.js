const express = require('express')
const app = express()

app.set('view engine', 'ejs')

const PORT = 3002
const path = require('path')

const producto = {
    nombre: "coca cola",
    precio: "100",
    stock: "100",
}

app.listen(PORT,()=> console.log('listening on port', PORT))


app.use(express.static(path.join(__dirname, 'public')))

app.get('/', (req, res) => {
    res.render('vistas/bienvenidos', {producto: producto})
})
app.get('/', (req, res)=> res.sendFile(path.join(__dirname, 'views/home.html')))
app.get('/productos', (req, res)=> res.sendFile(path.join(__dirname, 'views/productos.html')))
app.get('/producto1', (req, res)=> res.sendFile(path.join(__dirname, 'views/producto1.html')))
