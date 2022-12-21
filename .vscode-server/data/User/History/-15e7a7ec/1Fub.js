const menuEmail = document.querySelector('.navbar-email');
const menuHamIcon = document.querySelector('.menu');
const menuCarritoIcon = document.querySelector('.navbar-shopping-cart');
const desktopMenu = document.querySelector('.desktop-menu');
const mobileMenu = document.querySelector('.mobile-menu');
const shoppingCartContainer = document.querySelector('#shoppingCartContainer');
const cardsContainer = document.querySelector('.cards-container');

menuEmail.addEventListener('click', toggleDesktopMenu);
menuHamIcon.addEventListener('click', toggleMobileMenu);
menuCarritoIcon.addEventListener('click', toggleCarritoAside);

function toggleDesktopMenu() {
    const isAsideClosed = shoppingCartContainer.classList.contains('inactive');

    if (!isAsideClosed) {
        shoppingCartContainer.classList.add('inactive');
    }

    desktopMenu.classList.toggle('inactive');
}

function toggleMobileMenu() {
    const isAsideClosed = shoppingCartContainer.classList.contains('inactive');

    if (!isAsideClosed) {
    shoppingCartContainer.classList.add('inactive'); 
    }

    mobileMenu.classList.toggle('inactive');
}

function toggleCarritoAside() {
    const isMobileMenuClosed = mobileMenu.classList.contains('inactive');

    if (!isMobileMenuClosed) {
    mobileMenu.classList.add('inactive'); 
    }

    shoppingCartContainer.classList.toggle('inactive');
}


//! Como traer lista de productos desde JS

const productList = [];

productList.push ({
    name: 'Bike',
    price: 120,
    image:'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'

})

productList.push ({
    name: 'Pantalla',
    price: 220,
    image:'https://images.pexels.com/photos/38568/apple-imac-ipad-workplace-38568.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'

})

productList.push ({
    name: 'Compu',
    price: 620,
    image:'https://images.pexels.com/photos/1229861/pexels-photo-1229861.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'

})


{/* <div class="product-card">
<img src="https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="">
<div class="product-info">
    <div>
    <p>$120,00</p>
    <p>Bike</p>
    </div>
    <figure>
    <img src="../icons/bt_add_to_cart.svg" alt="">
    </figure>
</div>
</div> */}


function renderProducts (arr) {
    for (product of arr) {
        const productCard = document.createElement ('div')
        productCard.classList.add ('product-card')
    
        const productImg = document.createElement ('img')
        //*product = { name, price, image} -> product.image --- Cuando ponemos "src , product.imag", le estamos dicendo que al src modificquele por product.image
        productImg.setAttribute('src' , product.image)
        
        productImg.addEventListener('click',console.log)


        const productInfo = document.createElement ('div')
        productInfo.classList.add ('product-info')
    
        const productInfoDiv = document.createElement ('div')
    
        const productPrice = document.createElement ('p')
        productPrice.innerText = '$' + product.price
        const productName = document.createElement ('p')
        productName.innerText = product.name
    
        productInfoDiv.appendChild (productPrice)
        productInfoDiv.appendChild (productName)
    
        const productInfoFigure = document.createElement ('figure')
        const productImgCart = document.createElement ('img')
        productImgCart.setAttribute('src' , '../icons/bt_add_to_cart.svg')
    
        //*Despues de haber creado las etiquetas desde Js, vamos a poner cada hijo dentro de sus padres
    
        productInfoFigure.appendChild (productImgCart)
    
        productInfo.appendChild (productInfoDiv)
        productInfo.appendChild (productInfoFigure)
    
        productCard.appendChild (productImg)
        productCard.appendChild (productInfo)
    
        cardsContainer.appendChild (productCard)
    }
}

//*Con esta llamo la Funcion, pero asi me sirve para sincronizacion el dia de mananaaa
renderProducts (productList)