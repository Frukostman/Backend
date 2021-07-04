/**
 * Plantilla base para el desafio entregable de Javascript asincrono
 * 
 * Desarrollar una función que permita recorrer un texto que se le pase como parámetro 
 * y muestre cada una de sus palabras en un tiempo estipulado. 
 * Al finalizar debe ejecutar una función que se le pasa como callback.
 * 
 * Realizar tres llamadas a la función con porciones de texto que tienen que ser 
 * representados en forma ordenada. Inicialmente todas las palabras del primero, 
 * luego las del segundo y finalmente las del tercero.
 * 
 * Hacer configurable el tiempo de representación de palabras mediante un parámetro opcional.
 * Si este no se define será cada un segundo.
 * 
 * Al finalizar el la operación completa debe imprimir: 'proceso completo' y también mostrar
 * la cantidad de palabras totales
 * Aclaracion: no usar variables globales y clases y ejecutar con NodeJS (no tsc)
 */
// funcion de espera
const esperar = ret => { for (let i = 0; i < ret * 3e6; i++); }
// muestra las palabras en orden a partir de un texto
const mostrarPalabras = (texto, tiempo, totalPalabras, callback) => {
    let textoArray = texto.split(" ")
    for (let i = 0; i < textoArray.length; i++) {
        console.log(textoArray[i])
        esperar(tiempo);
    }
    let iniciaContador = totalPalabras + textoArray.length;
    
    callback(iniciaContador);
}
let texto1 = 'Ahora entendi mejor';
let texto2 = 'como pasa';
let texto3 = 'la callback, gracias!';
const tiempo = 500;

mostrarPalabras(texto1, tiempo, 0, ( totalPalabras) => {
   mostrarPalabras(texto2, tiempo, totalPalabras, ( totalPalabras) => {
        mostrarPalabras(texto3, tiempo, totalPalabras, ( totalPalabras) => {
            console.log('Proceso terminado, cantidad de palabras:', totalPalabras);
        });
    });
});