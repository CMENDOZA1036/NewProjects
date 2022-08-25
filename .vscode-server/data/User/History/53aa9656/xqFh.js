

//! Codigo del Cuadrado
console.group("Cuadrados")

//! const ladoCuadrado = 5
//!  console.log ("Los lados del Cuadrado miden: " + ladoCuadrado + "cm")

function perimetroCuadrado(lado) {
    return lado * 4
}



//! console.log ("El perimetro del Cuadrado mide: " + perimetroCuadrado + "cm")

function areaCuadrado(lado) {
    return lado * lado
}




//! console.log ("El Area del Cuadrado mide: " + areaCuadrado + "cm^2")

console.groupEnd()

//! Codigo de los triangulos

// console.group("Triangulos")
// const ladoTriangulo1 = 6
// const ladoTriangulo2 = 6
// const baseTriangulo = 4
// const alturaTriangulo = 5.5

// console.log (
//     "Los lados del triangulo miden: " 
//     + ladoTriangulo1 + "cm, " 
//     + ladoTriangulo2 + "cm, " 
//     + baseTriangulo + "cm"
// )

// console.log ("La altura del Triangulo es de: " + alturaTriangulo + "cm")

function perimetroTriangulo (lado1, lado2, base) {
    return lado1 + lado2 + base
}


// console.log ("El perimetro del triangulo es: " + perimetroTriangulo + "cm")



// const areaTriangulo = (baseTriangulo * alturaTriangulo) / 2
// console.log ("el Area Triangulo es: " + areaTriangulo + "cm")

function areaTriangulo (base, altura) {
    return (base * altura) / 2
}

console.groupEnd()


//! Codigo de los Circulos
console.group("Circulos")

//* Radio
// const radioCirculo = 4
// console.log ("el radio del circulo es: " + radioCirculo + "cm")


//* Diametro
// const diametroCirculo = radioCirculo * 2
// console.log ("el diametro del circulo es: " + diametroCirculo + "cm")
function diametroCirculo (radio) {
    return radio * 2
}

//* PI 
const pi = Math.PI
// console.log ("PI es: " + pi)


//* Circuferencia
// const perimetroCirculo = diametroCirculo * pi
// console.log ("El perimetro del Circulo es: " + perimetroCirculo + "cm")

function perimetroCirculo (radio) {
    const diametro = diametroCirculo (radio);
    return diametro * pi
}


//* Area
// const areaCirculo = (radioCirculo * radioCirculo) * pi
// console.log ("El Area del Circulo es: " + areaCirculo + "cm")

function areaCirculo (radio) {
    return (radio * radio) * pi
}

console.groupEnd()

//* Aqui interactuamos con HTML

function calcularperimetroCuadrado() {
    const input = document.getElementById("InputCuadrado");
    const value = input.value;

    const perimetro = perimetroCuadrado(value);
    if (perimetro >= 20) {
        Swal.fire({
            icon: 'success',
            title: 'Perfect...',
            text: 'Tu resultado es: ' + perimetro, //! Con esto genero alertas externas en Js
        })
    } else {
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Something went wrong!',
        });
    }
}

function calcularAreaCuadrado() {
    const input = document.getElementById("InputCuadrado");
    const value = input.value;

    const area = areaCuadrado(value);
    if (area >= 20) {
        Swal.fire({
            icon: 'success',
            title: 'Perfect...',
            text: 'Tu resultado es: ' + area, //! Con esto genero alertas externas en Js
        })
    } else {
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Something went wrong!',
        });
    }

}



