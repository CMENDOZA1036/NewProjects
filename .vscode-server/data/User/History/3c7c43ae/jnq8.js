

const nombre = "Cristian Mendoza"
const altura = 190
const concatenar = nombre + " " + altura

const datos = document.getElementById ("datos")
datos.innerHTML = `
    <h1>Hola mundo</h1>
    <h2>Mi nombre es: ${nombre}</h2>
    <h3>Mi estatura es: ${altura}</h3>
`