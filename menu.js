// script to open mobile menu

let hambuguer = document.querySelector('.hamb')

let header_nav = document.querySelector('.header-nav')

let iconList = document.querySelector('.bi-list')


let dropdown_menu = document.querySelector('.dropdown-menu')

hambuguer.addEventListener('click', () => {
    iconList.classList.toggle('active')
    dropdown_menu.classList.toggle('active')
})

// script to close menu mobile

let ham2 = document.querySelector('.hamb2')

let closeMenu = document.querySelector('.closemenu')

closeMenu.addEventListener('click', () => {
    iconList.classList.toggle('active')
    dropdown_menu.classList.toggle('active')
})