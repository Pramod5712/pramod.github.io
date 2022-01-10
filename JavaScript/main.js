console.log('Hello World!');

console.log('Hello');

document.getElementById('channels')
    .addEventListener('click', function() {
       location.href = 'chnl.html'
   //  console.log('clicked');
    });
    
document.getElementById('website')
    .addEventListener('click', function() {
        location.href = 'website.html'
        //  console.log('clicked');
    });
    
document.getElementById('apps')
    .addEventListener('click', function() {
        location.href = 'apps.html'
        //  console.log('clicked');
    });
    
document.getElementById('playlists')
    .addEventListener('click', function() {
        location.href = 'playlists.html'
        //  console.log('clicked');
    });
    
    
///////////////////////////////HUMBURGER
    
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




/////!!!//////////////////////////////preloader 
console.log('hiiii')

window.onload = function() {
    document.getElementById('preloader').style.display = 'none';
   // document.getElementById('webpage').style.display = 'block';
   document.getElementById('bod').style.height = '200vh';
   document.querySelector(html).style.visiblity = 'visible';
   
}






//SOCAIL ICON CLICK JS
document.getElementById('instac')
.addEventListener('click', function(){
    location.href = 'https://instagram.com/joshff_1?utm_medium=copy_link'
        //  console.log('clicked');
    });
    
document.getElementById('ytc')
    .addEventListener('click', function() {
        location.href = 'https://instagram.com/joshff_1?utm_medium=copy_link'
        //  console.log('clicked');
    });

document.getElementById('fbc')
    .addEventListener('click', function() {
        location.href = 'https://instagram.com/joshff_1?utm_medium=copy_link'
        //  console.log('clicked');
    });
    
document.getElementById('wpc')
    .addEventListener('click', function() {
        location.href = 'https://instagram.com/joshff_1?utm_medium=copy_link'
        //  console.log('clicked');
    });














































/*document.getElementById('instatouch')
.addEventListener('click',function(){
  location.href = 'https://instagram.com/joshff_1?utm_medium=copy_link'
});

document.getElementById('channels')
    .addEventListener('click', function() {
      //  location.href = 'chnl.html'
      console.log('Hi')
    });
  


/*var typed = new Typed('.auto-input', {
    strings: ["Web Developer", "UI Designer"],
    typeSpeed: 100,
    backSpeed: 100,
    loop: true,
})*/