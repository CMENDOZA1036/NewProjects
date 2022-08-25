const lista1 = [ 
    100,
    200,
    500,
    400000000
]

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
    const elemento1 = lista1 [mitadLista1]
    const elemento2 = lista1 [mitadLista1 + 1]

    

} else {
    mediana = lista1 [mitadLista1]
}