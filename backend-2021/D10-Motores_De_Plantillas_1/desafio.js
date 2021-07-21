// D10 - HANDLEBARS

//importacion
const express = require('express');
const handlebars=require('express-handlebars');
const Productos = require('./productos');

// instancias
const puerto = 8080;
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/', express.static(__dirname + '/views'))
const routerGlobal = express.Router();

//HANDLEBARS
//configuracion HBS
app.engine(
    'hbs',                                            //nombre ref. a la plantilla (se usa en el set)
    handlebars({                                      //func. de config.
        extname: '.hbs',                              //extension a utilizar
        defaultLayout: 'index.hbs',                   //plantilla ppal 
        layoutsDir: __dirname + '/views',             //ruta a la plantilla ppal
        partialsDir: __dirname + '/views/partials'    // ruta a las plant parciales
    })
)

// se setea el motor de plantilla a utilizar
app.set('view engine', 'hbs')
// directorio de archivos de plantilla
app.set('views', './views')

//GET y render
routerGlobal.get('/productos/vista',(req,res)=>{
    // let arrayProductos=Productos.leerProductos();
    // if(arrayProductos.error){
    //     res.render('error',{error:arrayProductos.error})
    // }else{
    //     res.render('productos',{Productos:arrayProductos})
    // }
    
    res.render('productos')
    // res.render('index')
})


//GET listado 
routerGlobal.get('/productos',(req, res) => {
    res.json(Productos.leerProductos())
})
//GET producto por ID 
routerGlobal.get('/productos/:id',(req, res) => {
    res.json(Productos.leerProductosConId(req.params.id))
})
//POST de un producto nuevo sin ID
routerGlobal.post('/productos',(req,res) => {
  let prodGuardado = Productos.productoNuevo(req.body)
  res.send("Producto guardado")
  res.send(prodGuardado)
})
//PUT de un producto nuevo con ID
routerGlobal.put('/productos/:id',(req,res) => {
  let prodNuevo = req.body;
  let idProdNuevo = req.params.id
  let prodActualizado = Productos.actualizarConID(idProdNuevo, prodNuevo)
  res.send("Producto actualizado")
  res.send(prodActualizado)
})
//DELETE de un producto con ID
routerGlobal.delete('/productos/:id',(req,res) => {
  let idProdABorrar = req.params.id
  let prodBorrado = Productos.borrarConID(idProdABorrar)
  res.send("Producto eliminado")
  res.send(prodBorrado)
})

// aplico el router global
app.use('/api',routerGlobal)

const server = app.listen(puerto, () => {
    console.log(`servidor escuchando en http://localhost:${puerto}`);
});

server.on('error', error => {
    console.log('Error en el servidor:', error);
});