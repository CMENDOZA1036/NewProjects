
"Con este codigo llamamos el Canvas de HTML"
vp = document.getElementById ("villaplatzi")
papel = vp.getContext("2d")



"Con este codigo llamamos una Imagen de la carpeta al navegador"


vaca = {url: "vaca.png", cargaOK: false }
fondo = {url: "tile.png", cargaOK: false}

fondo.imagen = new Image()
fondo.imagen.src = fondo.url
fondo.imagen.addEventListener("load", cargarFondo)

vaca.imagen = new Image()
vaca.imagen.src = vaca.url
vaca.imagen.addEventListener("load", cargarVacas)


cantidad = aleatorio (0,50)

function cargarFondo()
{
    fondo.cargaOK = true
    dibujar()
}

function cargarVacas()
{
    vaca.cargaOK = true
    dibujar()
}


function dibujar()
{
    if(fondo.cargaOK == true)
    {
        papel.drawImage(fondo.imagen, 0,0)
    }
    if(vaca.cargaOK == true)
    {
        console.log(cantidad)
        for(v = 0; v < cantidad ; v++)
        {   
            x = aleatorio(0,7)
            y = aleatorio(0,7)
            x = x * 60
            y = y * 60
            papel.drawImage(vaca.imagen, x,y)
        }
    }

}




function aleatorio (min, max)

{
    var resultado;

    resultado = Math.floor(Math.random() * (max - min + 1)) + min

    return resultado
}