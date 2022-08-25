const menuEmail = document.querySelector ('.navbar-email')
const desktopMenu = document.querySelector ('.desktop-menu')
const menuHamIcon = document.querySelector ('.menu-Ham-Icon')
const mobileMenu = document.querySelector ('.mobile-menu')

menuEmail.addEventListener ('click', toggleDesktopMenu)

function toggleDesktopMenu () {
    desktopMenu.classList.toggle('inactive')
}