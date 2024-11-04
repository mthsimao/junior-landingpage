let hambuguer = document.querySelector('.hamb')

let header_nav = document.querySelector('.header-nav')

let iconList = document.querySelector('.bi-list')
let closeMenu = document.querySelector('.bi-x-lg')

hambuguer.addEventListener('click', () => {
    header_nav.classList.toggle('menu')
    iconList.classList.toggle('active')
    closeMenu.classList.toggle('active')
})