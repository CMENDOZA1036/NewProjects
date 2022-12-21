// const lista1 = [ 
//     300,
//     100,
//     500,
//     400000000
// ]


// function onClickButtonPriceDiscount() {
//     const inputPrice = document.getElementById ("lista1");//! Con este activamos el campo inputPrice de HTML
//     const lista1 = lista1.value; //! Con este traemos el valor puesto en ese campo

//     const precioConDescuento = calcularMediaAritmetica(lista1)

//     // if (precioConDescuento) {
//     //     Swal.fire({
//     //         icon: 'success',
//     //         title: 'Perfect...',
//     //         text: 'Tu resultado es: ' + precioConDescuento, //! Con esto genero alertas externas en Js
//     //     })
//     // }

//     const resultP = document.getElementById ("ResultP"); //! Con esta hacemos otra Alerta pero con la Etiqueta P de html
//     resultP.innerText = "El promedio es " + precioConDescuento

// }


// function calcularMediaAritmetica (lista) {
//     // let sumalista = 0

//     // for (let i = 0; i < lista.length; i++) {
//     // sumalista = sumalista + lista [i]
//     // }

//     const sumalista = lista.reduce(
//         function (valorAcumulado = 0, nuevoElemento) {
//             return valorAcumulado + nuevoElemento
//         }
//     ) //! Con este podemos hacer lo mismo que el cliclo for con el metodo 'reduce'

//     const promedioLista = sumalista / lista.length

//     return promedioLista
// }

// const mitadLista1 = parseInt (lista1.length / 2) //! con ParseInt ponemos los numero decimales en Enteros

// function esPar (numerito) {
    
//     if (numerito % 2 === 0 ) {
//         return true
//     } else {
//         return false
//     }
// }

// let Mediana

// if (esPar(lista1.length)) {
//     const elemento1 = lista1 [mitadLista1 - 1]
//     const elemento2 = lista1 [mitadLista1]

//     const promedioElemento1y2 = calcularMediaAritmetica ([
//         elemento1,
//         elemento2
//     ])

//     Mediana = promedioElemento1y2

// } else {
//     mediana = lista1 [mitadLista1]
// }

function calcularMediaAritmetica(lista) {
    const sumaLista = lista.reduce(function (valorAcumulado = 0, nuevoElemento) {
    return valorAcumulado + nuevoElemento;
    });
    const promedioLista = sumaLista / lista.length;
    return promedioLista;
}




function calcularMediana() {
    // Se captura los datos del html y se guardan los valores dentro de una variable
    const entradaMediana = document.getElementById("inputMediana");
    const medianaValue = entradaMediana.value;
    // Al ser un String los valores capturados, se procede a convertir el formato a Number 
    let arrayMediana = Array.from(medianaValue.split(","), Number);
    //   Ordenamos los valores de la lista desordenada mediante el metodo sort() de menor a mayor
    const listaOrdenada = arrayMediana.sort((numMenor, numMayor) => numMenor - numMayor);
    //   console.log(listaOrdenada);
    // Hallamos la mitad de la cantidad de elemento de mi lista obtenida del HTML y lo redondeamos en caso sea decimal con la funcion parseInt()
    const mitadLista = parseInt(listaOrdenada.length / 2);
    //   console.log(mitadLista);
    
    // Creamos la funcion esPar para verificar si la lista es par o impar
    function esPar(numerito) {
        if (numerito % 2 === 0) {
        return true;
        } else {
        return false;
        }
    }
    
    let mediana;
    // Si la lista es par procedemos hallar la mediana mediante esta forma de lo contrario seguiriamos con el else
    if (esPar(listaOrdenada.length)) {
        const elemento1 = listaOrdenada[mitadLista - 1];
        const elemento2 = listaOrdenada[mitadLista];
    // Llamamos a la funcion calcularMediaAritmetica() con los elementos1 y elementos2 como parametros y lo guardamos como la variable mediana
        const promedioElemento1y2 = calcularMediaAritmetica([elemento1, elemento2]);
        mediana = promedioElemento1y2;
    } else {
        mediana = listaOrdenada[mitadLista];
    }
      //   Enviamos los resultados obtenidos a la pagina html para su visualizacion
    const mostrarResultado = document.getElementById("resultadoMediana");
    mostrarResultado.innerText = "La mediana es de: " + mediana;
    }