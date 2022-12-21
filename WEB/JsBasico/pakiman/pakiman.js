imagenes = []

imagenes ["Cauchin"] = "vaca.png";
imagenes ["Pocacho"] = "pollo.png";
imagenes ["Tocinauro"] = "cerdo.png";





class Pakiman
{
    constructor (n, v, a )
    {
        this.imagen = new Image ()
        this.nombre = n
        this.vida = v
        this.ataque = a

        this.imagen.src = imagenes [this.nombre]
        
    }
    hablar()
    {
        alert (this.imagen);
    }
    
    mostrar ()
    {
        document.body.appendChild (this.imagen)
        
        document.write("<br /><strong>" + this.nombre + "</strong><br />")
        document.write("Vida: " + this.vida + "<br />")
        document.write("Ataque: " + this.ataque + "<hr />")
        
    }
}

coleccion = []
coleccion.push (new Pakiman ("Cauchin", 100, 30))
coleccion.push (new Pakiman ("Pocacho", 80, 50))
coleccion.push (new Pakiman ("Tocinauro", 120, 40))


for (pakin of coleccion)
{
    pakin.mostrar()
}





