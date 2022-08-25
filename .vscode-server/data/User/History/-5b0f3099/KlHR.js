
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

console.log(h1.getAttribute ('pantalla'));