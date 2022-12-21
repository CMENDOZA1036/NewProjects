
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

function DiscounCupons (price, cupon) {

  const cupones = price * (100 - cupon) / 100


  return cupones
}


//* Realizamos la Funcion para Calcular el Descuento

//* Activacion Campos
const price = document.querySelector ('#InputPrice')
const discount = document.querySelector ('#InputDiscount')
const coupons = document.querySelector ('#InputCoupon')
const resultP = document.querySelector('#ResultP')
const resultPMain = document.querySelector('.main-Result')
const button = document.querySelector ('.button-1')
const button2 = document.querySelector ('.button-2')

//* Funciones


function calcularDiscount () {

  //*Esta Variable es para dar Formato Moneda
  const formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 0,
  })

  
  //*Aca Llamamos los valores de los inputs

  const ValuePrice = Number(InputPrice.value);
  const ValueDiscount = Number(InputDiscount.value);

  //**Comprobar los campos Vacios
  if (ValuePrice == '') {
    Swal.fire({
      icon: 'error',
      title: 'Oops...',
      text: 'El Precio no debe estar vacio',
    })
  } else if (ValueDiscount == '') {
    Swal.fire({
      icon: 'error',
      title: 'Oops...',
      text: 'El Descuento no debe estar vacio',
    })
    return
  } else if (ValueDiscount > 100) {
    Swal.fire({
      icon: 'error',
      title: 'Oops...',
      text: 'El descuento debe ser Menor de 100',
    })
    return
  }
  

  //*Con esta Variable llamamos el calculo de la funcion porcentajes
  const calculo = porcentajes (ValuePrice, ValueDiscount)


  //*Esta es una alerta externa - Pero primero debe estar el script en html
    if (calculo) {
      Swal.fire({
        icon: 'success',
        title: 'Perfect...',
        text: 'Tu resultado es: ' + formatter.format(calculo),
      })
    }


  //*Esta es una Alerta interna
  const resultP = document.getElementById("ResultP")

  resultP.innerText = "El resultado es: " + formatter.format(calculo);

}



function openResult () {
  resultPMain.classList.remove ('inactive')

}



function DiscounCuponsResult () {
  
  //*Esta Variable es para dar Formato Moneda
  const formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 0,
  })

  
  //*Aca Llamamos los valores de los inputs

  const ValuePrice = Number(InputPrice.value);
  const Valuecoupon = InputCoupon.value;
  let discountCoupon;

  if (Valuecoupon == 'Franco') {
    discountCoupon = 30

  }else if (Valuecoupon == 'Mendez') {
    discountCoupon = 25
    
  }else {
    resultP.innerText = 'El cupon no es valido'  
  }
    
  

   //*Con esta Variable llamamos el calculo de la funcion porcentajes
  const calculo = (ValuePrice * (100 - discountCoupon)) / 100;
  
  //*Esta es una alerta externa - Pero primero debe estar el script en html
    if (calculo) {
      Swal.fire({
        icon: 'success',
        title: 'Perfect...',
        text: 'Tu resultado es: ' + formatter.format(calculo),
      })
    }

  //*Esta es una Alerta interna
  

  resultP.innerText = "El resultado es: " + formatter.format(calculo);


}