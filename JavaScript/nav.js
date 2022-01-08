const mainMenu = document.querySelector('.mainMenu');
const closeMenu = document.querySelector('.closeMenu');
const openMenu = document.querySelector('.openMenu');



openMenu.addEventListener('click',show);
closeMenu.addEventListener('click',close);


function show(){
    mainMenu.style.display = 'flex';
    mainMenu.style.top = '0';
}
function close(){
    mainMenu.style.top = '-100%';
}
console.log('hii')

//////////////!!!!!!!!r///</////<<<preloader
    console.log('puna')
    document.onload = function() {
            document.getElementById('preloader').style.display = 'none';
}