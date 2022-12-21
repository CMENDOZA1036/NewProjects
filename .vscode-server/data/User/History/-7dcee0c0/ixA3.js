
//*Hacemos el llamado a lo que se instalo en la consola.

const XMLHttpRequest = require('xmlhttprequest')

//*Luego creamos una const para llamar la API

const API = 'https://api.escuelajs.co/api/v1'

//** Hacemos una function para recibir la URL (API) y el callback para recibir la solicitud. 

function fetchData (urlApi, callback) {
    let xhtpp = new XMLHttpRequest ()


    xhtpp.open('GET', urlApi, true)
    xhtpp.onreadystatechange = function (event){
        if (xhtpp.readyState === 4){
            if (xhtpp.status === 200) {
                callback(null, JSON.parse(xhtpp.resposeText))
            }
        } else {
            const error = new Error('Error' + urlApi)
            return callback(error, null)
        }
    }
    xhtpp.send()
}