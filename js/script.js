const btnMenu = document.querySelector('#btn-menu');
const menu = document.querySelector('#menu');
const bgCover = document.querySelector('#bg-cover');

btnMenu.addEventListener('click', ()=> {
    btnMenu.classList.toggle('active-menu');
    menu.classList.toggle('open-menu');
    bgCover.classList.toggle('active-bg');
});