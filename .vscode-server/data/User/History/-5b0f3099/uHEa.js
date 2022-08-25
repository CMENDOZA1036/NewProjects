
//! Esta es la forma de Conectar HTML a Js con las clases, Id, etiquetas
const h1=document.querySelector('h1');
const p=document.querySelector('p');
const parrafito=document.getElementsByClassName('.parrafito');
const pid=document.getElementById('#pid');
const input=document.querySelector('input');

console.log(input.value);

console.log({
    h1,
    p,
    parrafito,
    pid,
    input,
});

//*Con esta propiedad manipulamos HTML 

// h1.innerHTML = "Paptito <br> Feo"

//* Con esta manipulamos HTML pero quedaria solo texto, la anterior quedaria manipulando HTML  

// h1.innerText = "Paptito <br> Feo"

//**con este podemos acceder a los atributos de HTML

//console.log(h1.getAttribute ('pantalla'));
//console.log(h1.getAttribute ('class'));

//* Con este modificamos las atributos de las clases en HTML

//h1.setAttribute ('class', 'rojo')

//* Con este modificamos las clases

h1.classList.add ('rosa')
h1.classList.remove ('verde')

input.value = "456"

const img = document.createElement('img')

img.setAttribute ('src', 'https://images.pexels.com/photos/7335655/pexels-photo-7335655.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')

console.log (img)