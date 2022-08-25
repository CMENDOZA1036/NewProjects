// const preciooriginal = 120

// const descuento = 18 






// console.log ( {
//     preciooriginal,
//     descuento,
//     porcentajePrecioConDescuento,
//     precioConDescuento
// })

function calcularPrecioConDescuento (precio, descuento) {
    const porcentajePrecioConDescuento = 100 - descuento
    const precioConDescuento = (precio * porcentajePrecioConDescuento) / 100;
    
    return precioConDescuento
}