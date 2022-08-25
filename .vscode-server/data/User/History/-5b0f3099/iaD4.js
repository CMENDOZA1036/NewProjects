
//! Esta es la forma de Conectar HTML a Js con las clases, Id, etiquetas
const h1=document.querySelector('h1');
//const p=document.querySelector('p');
//const parrafito=document.getElementsByClassName('parrafito');
//const pid=document.getElementById('pid');
//const input=document.querySelector('input');

const input1 = document.querySelector ('#calculo1')
const form = document.querySelector ('#form')
const input2 = document.querySelector ('#calculo2')
const btn = document.querySelector ('#btnCalcular')
const pResult = document.querySelector ('#result')


//! Con AddEventListener le ponemos el evento q queremos escuchar, Es decir, que apenas le den click al boton (btn) se ejectula la funcion btnOnclick
form.addEventListener ('submit', btnOnclick)

//? Cuando tenemos la info en HTML dentro de un formulario debemos aplicar 3 pasos: 1 Conectar el formulario a JS. 2 generar el addEventListener con submit y no con click. 3 dentro de la funcion debemos poner dentro de los (event) y llamando event.preventDefault

//*Con esta Function podemos hacer el calculo de los inputs y mostrar el resultado en la pantalla
function btnOnclick (event) {
    event.preventDefault();
    const sumaInputs = Number(input1.value) + parseInt(input2.value);
    pResult.innerText = "El resultado es: " + sumaInputs
}




//! de aca para abajo vemos como manipular HTML desde Js
//console.log(input.value);

//console.log({h1,p,parrafito,pid,input,})

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

//h1.classList.add ('rosa')
//h1.classList.remove ('verde')

//input.value = "456"

//* Con esto creamos una etiqueta de img con un elemento adentro

//const img = document.createElement('img')

//img.setAttribute ('src', 'https://images.pexels.com/photos/7335655/pexels-photo-7335655.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')

//console.log (img)

//*Con esta borramos o quitamos el contenido de un ID
//pid.innerHTML =""

//* Con esta mandmos a llamar la img que teniamos en la variable de arriba

//pid.append (img)