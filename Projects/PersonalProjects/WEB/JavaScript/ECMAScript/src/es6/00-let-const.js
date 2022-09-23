
//*Con estas dos podemos reasignar las variables
var lastName = ' David'
lastName = 'Oscar'
console.log(lastName)


let fruit = 'Apple'
fruit = 'manzana'
console.log(fruit)

const animal = 'perro'
animal = 'gato'
console.log(animal)

const fruits =  () => {
    if (true) {
        var fruit1 = 'apple' // function scope
        let fruit2 = 'Kiwi' // block scope
        const fruit3 = 'banana' // block scope
    }
    console.log (fruit1)
    console.log (fruit2)
    console.log (fruit3)
}

fruits ();