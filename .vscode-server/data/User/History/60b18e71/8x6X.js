
//* Ejemplo 1

function sum (num1, num2) {
    return num1 + num2
}

function calc(num1, num2, callback) {
    return callback(num1, num2)
}

console.log(calc(2,2, sum))


//* Ejemplo 2 - con setTimeout, donde se ingresa una function, tiempo y argumentos, en este ejemplo solo ingresamos funcion y tiempo

setTimeout(function() {
    console.log("Hola JavaScript")
}, 5000)


//* Ejemplo 3 - setTimeout con argumentos

function gretting (name) {
    console.log(`Hola ${name}`)
}

setTimeout (gretting, 2000, "Oscar")