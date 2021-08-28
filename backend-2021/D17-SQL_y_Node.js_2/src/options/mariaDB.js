const options = {
    client: 'mysql',
    connection: {
        host: '127.0.0.1',
        user: 'root',
        password: '',
        database: 'productos_db'
    },
    pool: { min: 0, max: 7 }
}

module.exports = { options }



// /* SQL para crear una tabla */
// CREATE TABLE productos (
//     nombre varchar(255) NOT NULL,
//     descripcion varchar(255),
//     codigo int unsigned,
//     foto varchar(255),
//     precio int ,
//     stock int unsigned ,
//     id int NOT NULL AUTO_INCREMENT,
//     timestamp varchar(255),
//     PRIMARY KEY (id)
// );



