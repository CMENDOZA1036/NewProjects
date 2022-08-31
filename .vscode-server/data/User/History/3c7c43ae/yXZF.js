

const nombre = "Cristian Mendoza"
const altura = 189
const concatenar = nombre + " " + altura

const datos = document.getElementById ("datos")

datos.innerHTML = `
    <h1>Hola mundo</h1>
    <h2>Mi nombre es: ${nombre}</h2>
    <h3>Mi estatura es: ${altura} cm</h3>
`

if (altura >= 190) {
    datos.innerHTML = `<h1>
        Eres una persona ALTA
    </h1>`
}else {
    `<h1>
        Eres una persona BAJA
    </h1>`
}