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

function onClickButtonPriceDiscount() {
    const inputPrice = document.getElementById ("InputPrice");
    const priceValue = InputPrice.value;

    const inputDiscount = document.getElementById ("InputDiscount")
    const discountValue = InputDiscount.value; 

    const precioConDescuento = calcularPrecioConDescuento(priceValue, discountValue)
}

