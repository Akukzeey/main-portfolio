window.addEventListener('scroll',function(){
    let scroll=document.querySelector('.scroll-to-top')
    scroll.classList.toggle("active",window.scrollY>300)

})

function scrollToTop() {
    window.scrollTo({
        top:0,
        behavior:"smooth",
    })
}

var i = 0;
var txt = 'Hello I\'m Farouk Ahmed a Frontend Developer from Kenya with a passion for Web Development.';
var speed = 50;

function typeWriter() {
    if (i < txt.length) {
        document.getElementById("input-text").innerHTML += txt.charAt(i);
        i++;
        setTimeout(typeWriter, speed);
    }
}
typeWriter()