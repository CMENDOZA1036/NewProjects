// const lista1 = [ 
//     300,
//     100,
//     500,
//     400000000
// ]


function onClickButtonPriceDiscount() {
    const inputPrice = document.getElementById ("lista1");//! Con este activamos el campo inputPrice de HTML
    const lista1 = lista1.value; //! Con este traemos el valor puesto en ese campo

    const precioConDescuento = calcularMediaAritmetica(lista1)

    // if (precioConDescuento) {
    //     Swal.fire({
    //         icon: 'success',
    //         title: 'Perfect...',
    //         text: 'Tu resultado es: ' + precioConDescuento, //! Con esto genero alertas externas en Js
    //     })
    // }

    const resultP = document.getElementById ("ResultP"); //! Con esta hacemos otra Alerta pero con la Etiqueta P de html
    resultP.innerText = "El promedio es " + precioConDescuento

}


function calcularMediaAritmetica (lista) {
    // let sumalista = 0

    // for (let i = 0; i < lista.length; i++) {
    // sumalista = sumalista + lista [i]
    // }

    const sumalista = lista.reduce(
        function (valorAcumulado = 0, nuevoElemento) {
            return valorAcumulado + nuevoElemento
        }
    ) //! Con este podemos hacer lo mismo que el cliclo for con el metodo 'reduce'

    const promedioLista = sumalista / lista.length

    return promedioLista
}

const mitadLista1 = parseInt (lista1.length / 2) //! con ParseInt ponemos los numero decimales en Enteros

function esPar (numerito) {
    
    if (numerito % 2 === 0 ) {
        return true
    } else {
        return false
    }
}

let Mediana

if (esPar(lista1.length)) {
    const elemento1 = lista1 [mitadLista1 - 1]
    const elemento2 = lista1 [mitadLista1]

    const promedioElemento1y2 = calcularMediaAritmetica ([
        elemento1,
        elemento2
    ])

    Mediana = promedioElemento1y2

} else {
    mediana = lista1 [mitadLista1]
}



