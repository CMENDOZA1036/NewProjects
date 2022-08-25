//Codigo del Cuadrado
console.group("Cuadrados")

const ladoCuadrado = 5
console.log ("Los lados del Cuadrado miden: " + ladoCuadrado + "cm")

const perimetroCuadrado = ladoCuadrado * 4
console.log ("El perimetro del Cuadrado mide: " + perimetroCuadrado + "cm")

const areaCuadrado = ladoCuadrado * ladoCuadrado
console.log ("El Area del Cuadrado mide: " + areaCuadrado + "cm^2")

console.groupEnd()

//Codigo de los triangulos
console.group("Triangulos")
const ladoTriangulo1 = 6
const ladoTriangulo2 = 6
const baseTriangulo = 4
const alturaTriangulo = 5.5

console.log (
    "Los lados del triangulo miden: " 
    + ladoTriangulo1 + "cm, " 
    + ladoTriangulo2 + "cm, " 
    + baseTriangulo + "cm"
)

console.log ("La altura del Triangulo es de: " + alturaTriangulo + "cm")

const perimetroTriangulo = ladoTriangulo1 + ladoTriangulo2 + baseTriangulo
console.log ("El perimetro del triangulo es: " + perimetroTriangulo + "cm")

const areaTriangulo = (baseTriangulo * alturaTriangulo) / 2
console.log ("el Area Triangulo es: " + areaTriangulo + "cm")


console.groupEnd()

