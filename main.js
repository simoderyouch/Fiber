let bar = document.querySelector('.bar')
let menu = document.querySelector('.menu')
let up = document.querySelector('.scroll')



bar.addEventListener('click', function() {
    menu.classList.toggle('active')
    bar.classList.toggle('is-active')
   
});
 




window.onscroll = function () {

if (this.scrollY >= 300) {
        up.classList.add('show')
    }
else {
        up.classList.remove('show')
    }
}

up.onclick = function () {
    window.scrollTo({ top: 0, behavior: 'smooth' });
} 
