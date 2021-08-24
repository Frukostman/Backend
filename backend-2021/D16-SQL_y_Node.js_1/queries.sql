-- Queries SQL desafio 16 - Santiago Homps

/* 1- Crear una base de datos llamada 'prueba' */
CREATE DATABASE prueba CHARACTER SET utf8;

/* 2- Crear una tabla con id autoincremental */
CREATE TABLE items (
    nombre varchar(255) NOT NULL,
    categoria varchar(255) NOT NULL,
    stock int unsigned,
    id int NOT NULL AUTO_INCREMENT,
    PRIMARY KEY (id)
);

/* 3- Insertar registros en la tabla */
INSERT INTO items (nombre, categoria, stock) VALUES ("Fideos", "Harina", 20);
INSERT INTO items (nombre, categoria, stock) VALUES ("Leche", "Lacteos", 30);
INSERT INTO items (nombre, categoria, stock) VALUES ("Crema", "Lacteos", 15);

/* 4- Listar los registros agregados */
SELECT * FROM items

/* 5- Borrar item con id = 1 */
DELETE FROM items WHERE id = 1

/* 6- Actualizar el stock del item con id = 2 a 45 */
UPDATE items SET stock = 45 WHERE id = 2

/* 7- Listar los registros comprobando que los datos estén actualizados según las acciones realizadas. */
SELECT * FROM items