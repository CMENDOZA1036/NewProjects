const preciooriginal = 100

const descuento = 15 

const porcentajePrecioConDescuento = 100 - descuento

const precioConDescuento = (preciooriginal * porcentajePrecioConDescuento) / 100

console.log ( {
    preciooriginal,
    descuento,
    porcentajePrecioConDescuento,
    precioConDescuento
})