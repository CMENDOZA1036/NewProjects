texto = document.getElementById ("texto_lineas")
boton = document.getElementById ("botoncito")

boton.addEventListener("click" , dibujoPorClick )

d = document.getElementById("dibujito")
ancho = d.width 
lienzo = d.getContext ("2d")





'Esta es la funcion para declarar el tamano de la linea y el color'
function dibujarLinea(color, xinicial, yinicial, xfinal, yfinal)
{
    lienzo.beginPath()

    lienzo.strokeStyle = color

    lienzo.moveTo(xinicial,yinicial)

    lienzo.lineTo(xfinal,yfinal)
    lienzo.stroke()

    lienzo.closePath()

}


'Esta Funcion Ejjecuta el Click del Boton y todo lo demas'
function dibujoPorClick ()
{
   
    
    lineas = parseInt(texto.value)
    l = 0
    var yi, xf
    var xi, yf
    colorcito = "#AFA"
    espacio = ancho / lineas


    ' while (l < lineas )'

    for (l = 0; l < lineas; l++)
    { 
    yi = espacio * 1
    xf = espacio * ( l + 1)


    dibujarLinea(colorcito, 0, yi, xf, 300)
    console.log("Linea " + l)
    l += 1
    }

'Estas Son las lineas X y Y pero las que van rectas'
dibujarLinea(colorcito, 0, 0 ,0,299)
dibujarLinea(colorcito, 0, 299 ,299,299)

}