teclas = {

    UP: 38,  
    DOWN: 40,
    LEFT: 37,
    RIGTH: 39
}



document.addEventListener("keyup", dibujarTeclado)

cuadrito = document.getElementById ("areas_de_dibujo")
papel = cuadrito.getContext ("2d")

x = 150 
y = 150





'Esta es la funcion para declarar el tamano de la linea y el color'
function dibujarLinea(color, xinicial, yinicial, xfinal, yfinal, lienzo)
{
    lienzo.beginPath()
   
    lienzo.strokeStyle = color
    lienzo.lineWidth = 3
    lienzo.moveTo(xinicial,yinicial)
    lienzo.lineTo(xfinal,yfinal)
    lienzo.stroke()

    lienzo.closePath()

}


function dibujarTeclado(evento)
{

    movimiento = 10
    colorcito = "blue"
    switch(evento.keyCode)
    {

             

        case teclas.UP:
        dibujarLinea(colorcito, x, y, x, y - movimiento, papel )

        y = y - movimiento
        
        break

        case teclas.DOWN: 
        dibujarLinea(colorcito, x, y, x, y + movimiento, papel )

        y = y + movimiento
        break
        
        case teclas.LEFT: 
        dibujarLinea(colorcito, x, y, x - movimiento, y, papel)

        x = x - movimiento
        break

        case teclas.RIGTH: 
        dibujarLinea(colorcito, x, y, x + movimiento, y, papel)

        x = x + movimiento
        break

        default:

        alert("otra tecla")
    }
    
}