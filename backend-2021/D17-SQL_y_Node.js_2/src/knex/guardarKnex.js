const { options } = require ('../options/mariaDB.js')
const knex = require('knex')(options)


const guardarKnex = (prod) => {

    knex('productos').insert(prod)
    .then(() => console.log("Producto ingresado"))
    .catch((err) => { console.log('Error: '+ err); throw err })
    // .finally(() => {
    // knex.destroy();
    // })
} 

module.exports = { guardarKnex }

