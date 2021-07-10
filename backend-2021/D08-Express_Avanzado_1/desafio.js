const express = require('express');
const Producto = require('./producto');

const app = express();

app.use(express.json());
app.use(express.urlencoded());


// const listaProductos = []
const listaProductos = [{
    "id": 1,
    "title": "Pandora's Promise",
    "price": 238,
    "thumbnail": "Romeo"
  }, {
    "id": 2,
    "title": "Valiant",
    "price": 134,
    "thumbnail": "Oscar"
  }, {
    "id": 3,
    "title": "Nadine",
    "price": 225,
    "thumbnail": "Tango"
  }, {
    "id": 4,
    "title": "Traces of Red",
    "price": 189,
    "thumbnail": "Hotel"
  }, {
    "id": 5,
    "title": "Cruel Gun Story (Kenjû zankoku monogatari)",
    "price": 370,
    "thumbnail": "Golf"
  }]

app.get('/api/productos',(req, res) => {
    res.json(listaProductos)
})
app.get('/api/productos/:id',(req, res) => {
    (req.params.id>listaProductos.length)? console.log("Ese producto no existe"):res.json(listaProductos[req.params.id])
})
app.post('/api/productos',(req, res) => {

    let id = req.body.length+1;
    let titulo = req.body.title;
    let precio = req.body.price;
    let imagen = req.body.thumbnail;
    console.log(id)
    console.log(titulo)
    console.log(precio)
    console.log(imagen)
    let nuevoProducto = new Producto(id, titulo, precio, imagen)
    // let nuevoProducto = productos.guardar(title, price, thumbnail)
    listaProductos.push(nuevoProducto)
    console.log(nuevoProducto)
    res.json(nuevoProducto)

    // res.send(req.params.)
    // res.json(listaProductos[req.params.id])
    // res.json(listaProductos)
})


const puerto = 8080;

const server = app.listen(puerto, () => {
    console.log(`servidor escuchando en http://localhost:${puerto}`);
});

server.on('error', error => {
    console.log('error en el servidor:', error);
});
