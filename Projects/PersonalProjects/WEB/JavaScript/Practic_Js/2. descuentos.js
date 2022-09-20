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
    const inputPrice = document.getElementById ("InputPrice");//! Con este activamos el campo inputPrice de HTML
    const priceValue = InputPrice.value; //! Con este traemos el valor puesto en ese campo

    const inputDiscount = document.getElementById ("InputDiscount")
    const discountValue = InputDiscount.value; 

    const precioConDescuento = calcularPrecioConDescuento(priceValue, discountValue)

    // if (precioConDescuento) {
    //     Swal.fire({
    //         icon: 'success',
    //         title: 'Perfect...',
    //         text: 'Tu resultado es: ' + precioConDescuento, //! Con esto genero alertas externas en Js
    //     })
    // }

    const resultP = document.getElementById ("ResultP"); //! Con esta hacemos otra Alerta pero con la Etiqueta P de html
    resultP.innerText = "El precio con descuento es " + precioConDescuento

}





