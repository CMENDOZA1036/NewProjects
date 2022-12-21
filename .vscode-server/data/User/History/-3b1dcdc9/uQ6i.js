
//* Estructura base
const promise = new Promise(function(resolve,reject){
    resolve ('Hey')
})

const cows = 9
const countCows = new Promise (function(resolve, reject) {
    if (cows > 10) {
        resolve(`We Have ${cows} cows on the farm`)
    }else {
        reject ("There is no cows on the farm")
    }
})

countCows.then((result) => {
    console.log(result)
})