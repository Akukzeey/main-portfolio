const add=document.querySelector('.add')
const num=document.querySelector('.icon-no')
const minus=document.querySelector('.minus')
const btn=document.querySelector('.btn-class')
const cart=document.querySelector('#cart-container')
const cartImg=document.querySelector('#cart')
const aTag=document.querySelector('.a-tag')
const cartItems=document.querySelector('.container3')
const nameOfItem=document.querySelector('.header-2')
const mainImg=document.querySelector('#main-img')
const fixedPrice=document.querySelector('#number')
const innerDiv=document.querySelector('.inner-div')
const priceCart=document.querySelector('.price-cart')
const noCart=document.querySelector('.no-cart')
const total=document.querySelector('.total')
const p4=document.querySelector('.p4')
const del=document.querySelector('.delete')
const innerDivA=document.querySelector('.inner-diva')
const btnCart=document.querySelector('.btn-cart')
const noDiv=document.querySelector('.no-div')
const mainImg1=document.querySelectorAll('.main-img1')
const overlay=document.querySelector('.overlay')
const popUp=document.querySelector('.pop-up')
const popUp1=document.querySelector('.pop-up-img')
const modal=document.querySelector('.modal')
const closeBtn=document.querySelector('.close-btn')
const slider=document.querySelectorAll('[data-carousel-button]')
let number= 0;
let y = 1;



add.addEventListener('click', evt => {
        number+=y
        num.innerHTML=number
})


minus.addEventListener('click',evt => {
    number-=y
    num.innerHTML=number
})

cart.addEventListener('click',evt => {
    console.log(evt)
    cart.style.position="relative"
    cartItems.classList.toggle('container4')
})




        btn.addEventListener('click', evt => {
            if (number > 0) {
                innerDiv.classList.remove('container5')
                let a=`${fixedPrice.textContent}`
                let b=`${number}`
                let d=`$${fixedPrice.textContent}.00`
                let e=`${number}`
                priceCart.innerHTML=`${d} * ${e}`
                let t=a*b
                total.innerHTML=`$${t}.00`;
                p4.style.display='none'
                btnCart.classList.remove('container6')
                btnCart.classList.remove('container6')
                noDiv.classList.remove('container5')
                noDiv.innerHTML=number
            }
        })

del.addEventListener('click', evt => {
    p4.style.display='block'
    btnCart.classList.add('container6')
   innerDiv.classList.add('container5')
    noDiv.classList.add('container5')
    cartItems.classList.remove('container4')
})


popUp.addEventListener('click',evt => {
   overlay.classList.add('active-lay')
   modal.classList.add('active')
})

closeBtn.addEventListener('click',evt => {
    overlay.classList.remove('active-lay')
    modal.classList.remove('active')
})

overlay.addEventListener('click',evt => {
    modal.classList.remove('active')
    overlay.classList.remove('active-lay')
})


slider.forEach(slide=>{
    slide.addEventListener('click',evt=>{
        const offset=slide.dataset.carouselButton==='next'?1:-1;
        const mainImg1=slide.closest("[data-carousel]").querySelector("[data-slides]")
        const activeSlide=mainImg1.querySelector(".data-active")
        let newIndex=[...mainImg1.children].indexOf(activeSlide)+offset
        if (newIndex<0) newIndex=mainImg1.children.length-1;
        if (newIndex>=mainImg.children.length) newIndex=0
        mainImg1.children[newIndex].dataset.active=true
        delete  activeSlide.dataset.active
    })
})

