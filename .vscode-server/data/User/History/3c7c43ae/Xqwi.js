
/*
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
    datos.innerHTML += `<h1>
        Eres una persona ALTA
    </h1>`
} else {
    datos.innerHTML += `<h1>
        Eres una persona BAJITA
    </h1>`
}

for ( i = 2000; i<=2020; i++) {
    datos.innerHTML += "<h1>Estamos en el year: </h1>" + i;
}
*/

function MuestraMiNombre(nombre, altura) {
    const datos = document.getElementById ("datos")

    datos.innerHTML = `
        <h1>Hola mundo</h1>
        <h2>Mi nombre es: ${nombre}</h2>
        <h3>Mi estatura es: ${altura} cm</h3>`
}


MuestraMiNombre ("Cristian Mendoza Al" , 180)

//*Promesas */

const saludar = new Promise((resolve, reject) => {

    setTimeout (() => {
        const saludo = "Hola Muy Buenas a todos";

        if (saludo) {
            resolve (saludo);
        }else {
            reject ("No hay saludo Disponible");
        }

    }, 2000);

} )

saludar.then(resultado => {
    alert(resultado)
})

.catch(err => {
    alert(error)
})