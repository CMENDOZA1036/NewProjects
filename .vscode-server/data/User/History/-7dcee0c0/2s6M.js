
//*Hacemos el llamado a lo que se instalo en la consola.

const XMLHttpRequest = require('xmlhttprequest').XMLHttpRequest

//*Luego creamos una const para llamar la API

const API = 'https://api.escuelajs.co/api/v1'

//** Hacemos una function para recibir la URL (API) y el callback para recibir la solicitud. 

function fetchData (urlApi, callback) {
    let xhtpp = new XMLHttpRequest ()

    xhtpp.open('GET', urlApi, true)
    xhtpp.onreadystatechange = function (event){
        if (xhtpp.readyState === 4){
            if (xhtpp.status === 200) {
                callback(null, JSON.parse(xhtpp.responseText))
            } else {
                const error = new Error('Error' + urlApi)
                return callback(error, null)
            }
        } 
    }
    xhtpp.send()
}

//* LLamado a la Function

fetchData (`${API}/products`, function(error1, data1){
    if (error1) return console.error(error1)
    fetchData(`${API}/products/${data1[0].id}`, function(error2, data2){
        if (error2) return console.error(error2)
        fetchData(`${API}/categories/${data2?.category?.id}`, function (error3, data3){
            if (error3) return console.error(error3)
            console.log(data1[0])
            console.log(data2.title)
            console.log(data3.name)
        })
    })
})