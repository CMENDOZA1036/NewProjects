
// todo  CUADRADOS, TRIANGULOS, PORCENTAJES


//! CUADRADOS 

console.group('Cuadrado') 

const ladoCuadrado = 5;
const perimetroCuadrado = ladoCuadrado * 4;
const areaCuadrado = ladoCuadrado * ladoCuadrado;

console.log({
  ladoCuadrado,
  perimetroCuadrado,
  areaCuadrado,
});

function calcularCuadrado(lado) {
  return {
    perimetro: lado * 4,
    area: lado * lado,
  };
}

console.groupEnd('Cuadrado') 


//! TRIANGULOS

console.group('Triangulo')

const ladoTriangulo1 = 6;
const ladoTriangulo2 = 6;
const ladoTrianguloBase = 4;
const alturaTriangulo = 5.5;

const perimetroTriangulo = ladoTriangulo1 + ladoTriangulo2 + ladoTrianguloBase;
const areaTriangulo = (ladoTrianguloBase * alturaTriangulo) / 2;

function calcularTriangulo(lado1, lado2, base, altura) {
  return {
    perimetro: lado1 + lado2 + base,
    area: (base * altura) / 2,
  };
}

console.log({
  ladoTriangulo1,
  ladoTriangulo2,
  ladoTrianguloBase,
  alturaTriangulo,
  perimetroTriangulo,
  areaTriangulo,
});

console.groupEnd('Triangulo') 


//! CIRCULOS


console.group('Circle')

const radioCirculo = 3
const diametroCirculo = radioCirculo * 2
const PI = Math.PI.toFixed (4) //**Con esta opcion limitamos los decimales */


const circunferencia = diametroCirculo * PI
const areaCirculo = (radioCirculo ** 2) * PI


console.log({
  radioCirculo,
  diametroCirculo,
  PI,
  circunferencia,
  areaCirculo,
});


function calcularCirculo (radio) {
  
  const diametro = radio * 2
  const radioAlCuadrado = Math.pow (radio, 2)
  
  
  return {
    circunferencia: diametro * PI,
    area: radioAlCuadrado * PI,
  }
}

console.groupEnd('Circle') 


//! ALTURA DE UN TRIANGULO  (ISOSCELES NO EQUILATERO)

function calcularAlturaTriangulo (lado1, base) {
  if (lado1 == base) {
    console.warn ("Este no es un triangulo Isoceles")
  } else {
    
    // h = raizcuadrada ((lado1 ** 2) - (b ** 2) / 4 ) 
    // Math.sqrt Es la raiz de un numero, y en parentesis ponemos al cuadrado o al cubo etc. 
    return Math.sqrt ((lado1 ** 2) - ((base ** 2)/4))

  }
}


//! TRIANGULO ESCALENO


function calcularAlturaTrianguloEscaleno(a, b, c) {
	/*
	Calcula la altura (hb) de un triangulo escaleno
	a = lado1
	b = base
	c = lado2
	*/
	const x = (c**2 - a**2 + b**2) / (2 * b);
	const h = Math.sqrt(c**2 - x**2);

	return h;
}

//! PORCENTAJES

/* 
Formula

[ P * (100 - D)] / 100

*/

function porcentajes (price, discount) {

  const resultado = price * (100 - discount) / 100

  return resultado
}


//*Realizamos la Funcion para Calcular el Descuento

function calcularDiscount () {

  const price = document.getElementById ("InputPrice")
  const ValuePrice = InputPrice.value;

  const discount = document.getElementById("InputDiscount")
  const ValueDiscount = InputDiscount.value;

  const calculo = porcentajes (ValuePrice, ValueDiscount)

  const resultP = document.getElementById("ResultP")
  resultP.classList.remove ('inactive')
  resultP.innerText = "El resultado es: " + calculo;

}
