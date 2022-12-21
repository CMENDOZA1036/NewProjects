
//* Esta es la forma basica de hacer los strings
let hello = 'Hello'

let world = "World"

let epicPhrase = hello + " " + world + " !"



//* Ahora esta es la Actualizacion en Ecmascript - Template literals

let epicPhrase2 = `${hello} ${world} !` 
console.log (epicPhrase2)

//*Multilinea strings

let lorem = ' esto es un string \n' + 'esta es otra linea'

let lorem2 = `Esta es una frase epica
esta es la continuacion de la frase epica
`

console.log (lorem)
console.log(lorem2)