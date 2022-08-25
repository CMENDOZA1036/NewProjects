const lista1 = [
    1,
    2,
    3,
    1,
    2,
    3,
    4,
    2,
    2,
    2,
    1
]


//! Con esto podemos convertir un array en un objeto para contar cuantas veces existe un elemento en el array
const lista1Count = {}

lista1.map(
    function (elemento) {
        if (lista1Count [elemento]){
            lista1Count [elemento] += 1
        }else {
            lista1Count [elemento] = 1
        }
    }
)

//? Pasar de Objeto a Array
//! Con Sort nosotros ordenamos los elementos

const lista1Array = Object.entries (lista1Count).sort(
    function (ValorAcumulado, NuevoValor) {
        ValorAcumulado - NuevoValor
    }
)

Object.entries (lista1Count).sort (
    function (elementoA, elementoB){
        return elementoA [1] - elementoB [1]
    }
)