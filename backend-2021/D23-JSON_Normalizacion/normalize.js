const books = require('./books')
const fs = require('fs')

const { normalize, denormalize, schema } = require("normalizr");

//Schemas 

const authors = new schema.Entity("authors")

const comments = new schema.Entity("comments")

const bookSchema = new schema.Entity('books', {
    author: authors,
    comments: [comments]
});

const library = new schema.Entity('library', {
    books: [bookSchema]
});

//Normalizacion 

    const normalizedBooks = normalize(books, library)

    //Peso Normalizado  
    console.log("----Normalizado----")
    const pesoNormalizado = (JSON.stringify(normalizedBooks).length)
    console.log(pesoNormalizado)
    
    fs.writeFile("./normalizedBook.json", JSON.stringify(normalizedBooks), "utf-8", (err)=> {
        if(err) throw new Error(err)
    })
    
//Desnormalizacion 
    
    const denormalizedBooks = denormalize(normalizedBooks.result, library, normalizedBooks.entities)
    
    //Peso desnormalizado  
    console.log("----Desnormalizado----")
    const pesoDesnormalizado = (JSON.stringify(denormalizedBooks).length)
    console.log(pesoDesnormalizado)

    fs.writeFile("./denormalizedBook.json", JSON.stringify(denormalizedBooks), "utf-8", (err)=> {
        if(err) throw new Error(err)
    })

//Diferencia en peso

console.log("----Diferencia----")
const diferenciaPeso = pesoDesnormalizado - pesoNormalizado
console.log(diferenciaPeso)
