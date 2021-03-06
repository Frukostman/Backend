class Productos {
    //seteo una lista de productos vacia
    listaProductos = []
    //Creo un id inicial en cero
    idNuevo = 0
    
    //METODOS

    //recibo producto en JSON por params y lo almaceno con id incremental sobre el id creado 
    productoNuevo(producto){
      this.listaProductos.push({
        id:++this.idNuevo, //incremento el id inicial y lo asigno al producto nuevo
        title: producto.title,
        price: producto.price,
        thumbnail: producto.thumbnail
      })
      return(this.listaProductos[this.id-1]); //retorno el producto creado como objeto
    }
    // Valido si hay productos en el array y retorno el listado o el error (objeto) segun corresponda
    leerProductos(){
      if (this.listaProductos.length<=0) {
        return {error:"Aun no existe ningun producto"}
      } else {
        return this.listaProductos
      }
    }
    // Valido si el numero corresponde a un producto existente y retorno el producto o el error (objeto) segun corresponda
    leerProductosConId(id){
      if (this.listaProductos[id-1]==undefined) {
        return {error:"Ese producto no existe aun"}
      } else {
        return this.listaProductos[id-1]
      }    
    }
  }

// exporto el modulo Productos
module.exports= new Productos;