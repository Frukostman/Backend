const express = require('express');
// const Producto = require('./producto');


const app = express();

app.use(express.json());
app.use(express.urlencoded());

class Producto {
  constructor(id, title, price, thumbnail) {
      this.id= id
      this.title= title,
      this.price= price,
      this.thumbnail= thumbnail
  }
//METODOS

}

const listaProductos = []

app.get('/api/productos',(req, res) => {
    res.json(listaProductos)
})
app.get('/api/productos/:id',(req, res) => {
    (req.params.id>listaProductos.length)? console.log("Ese producto no existe"):res.json(listaProductos[req.params.id])
})
app.post('/api/productos',(req, res) => {
    let id = listaProductos.length+1;
    let titulo = req.body.title;
    let precio = req.body.price;
    let imagen = req.body.thumbnail

    let nuevoProducto = new Producto(id, titulo, precio, imagen)
    listaProductos.push(nuevoProducto)

    res.json(listaProductos)
})

const puerto = 8080;

const server = app.listen(puerto, () => {
    console.log(`servidor escuchando en http://localhost:${puerto}`);
});

server.on('error', error => {
    console.log('error en el servidor:', error);
});
