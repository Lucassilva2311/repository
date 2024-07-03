const esconde = document.querySelector('.esconder-menu')
const mostra = document.querySelector('.mostrar-menu')
const menu = document.querySelector('.menu-lateral')
const portfolio = document.querySelector('.portfolio')
const experiencia = document.querySelector('.experiencia')

function mostraMenu() {
    esconde.style.display = "none"
    mostra.style.display = "block"
    menu.style.cssText = "left: -19%"
    portfolio.style.cssText  = "width: 90%"
    //experiencia.style.cssText  = "width: 90%"
}

function escondeMenu() {
    esconde.style.display = "block"
    mostra.style.display = "none"
    menu.style.cssText = "left: 0"
    portfolio.style.cssText  = "width: 70%"
    //experiencia.style.cssText  = "width: 70%"
}