
//! Promedio
function calcularMediaAritmetica (lista) {
    // let sumalista = 0

    // for (let i = 0; i < lista.length; i++) {
    // sumalista = sumalista + lista [i]
    // }

    const sumalista = lista.reduce(
        function (valorAcumulado = 0, nuevoElemento) {
            return valorAcumulado + nuevoElemento
        }
    ) //! Con este podemos hacer lo mismo que el cliclo for

    const promedioLista = sumalista / lista.length

    return promedioLista
}

