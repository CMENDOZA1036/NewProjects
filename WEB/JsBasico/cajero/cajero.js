class Billete 
{
    constructor (v , c)
    {
        this.valor = v
        this.cantidad = c
    }
}

function entregarDinero ()
{
    t = document.getElementById("dinero")
    dinero = parseInt(t.value)

    for(bi of caja)
    {
        if (dinero > 0)
        {
            div = Math.floor(dinero / bi.valor)
            
            if(div > bi.cantidad)
            {
                papeles = bi.cantidad
            }
            else 
            {
                papeles = div
            }

            entregado.push(new Billete(bi.valor, papeles))
            
            dinero = dinero - (bi.valor * papeles)
        }
    }
    if (dinero > 0)
    {
        
        resultado.innerHTML= "No tengo dinero :( "

    }
    else
    {
        for(e of entregado)
        {
            if (e.cantidad > 0)
            {
                resultado.innerHTML += e.cantidad + " billetes de $ " + e.valor + "<br />"
            }
            
        }
    }
    
}

caja = []
entregado = []

caja.push (new Billete(125,5))
caja.push (new Billete(50,10))
caja.push (new Billete(20,5))
caja.push (new Billete(10,10))
caja.push (new Billete(5,5))

dinero = 0
div = 0
papeles = 0

resultado = document.getElementById("resultado")
b = document.getElementById("extraer")
b.addEventListener ("click" , entregarDinero)


