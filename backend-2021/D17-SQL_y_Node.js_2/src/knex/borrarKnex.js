const { options } = require ('../options/mariaDB.js')
const knex = require('knex')(options)

const borrarKnex = (id) => {

    let idNumero = Number(id.id)

    knex.from('productos').where('id', '=', idNumero).del()
    .then(() => {console.log(`Producto ${id} eliminado`)})
    .catch((err) => { console.log('Error: '+ err); throw err })
    // .finally(() => {
    // knex.destroy();
    // })



} 

module.exports = { borrarKnex }