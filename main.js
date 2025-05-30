// ------------------------ MENU SHOW Y HIDDEN ---------------------- 

const navMenu = document.getElementById('nav-menu'),
    navToggle = document.getElementById('nav-toggle'),
    navClose = document.getElementById('nav-close')


/*===== MENU SHOW =====*/
/* Validate if constant exists */
if(navToggle){
    navToggle.addEventListener('click', () =>{
        navMenu.classList.add('show-menu')
    })
}


/*===== MENU HIDDEN =====*/
/* Validate if constant exists */
if(navClose){
    navClose.addEventListener('click',() => {
        navMenu.classList.remove('show-menu');
    })
}

// ---------------------- REMOVE MENU MOBILE ------------------- 

const navLink = document.querySelectorAll('.nav__link')

function linkAction(){
    const navMenu = document.getElementById('nav-menu')
    // When we click on each nav__link, we remove the show-menu class
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))




/*==================== ACCORDION SKILLS ====================*/  /* Skill hide/unhide */
 const skillsContent = document.getElementsByClassName('skills__content'),
      skillsHeader = document.querySelectorAll('.skills__header')

function toggleSkills(){
    let itemClass = this.parentNode.className

    for(i=0; i < skillsContent.length; i++){
        skillsContent[i].className = 'skills__content skills__close'
    }
    if(itemClass === 'skills__content skills__close'){
        this.parentNode.className = 'skills__content skills__open'
    }
}

skillsHeader.forEach((el) =>{
    el.addEventListener('click', toggleSkills)
})


/*==================== QUALIFICATION TABS ====================*/
const tabs = document.querySelectorAll('[data-target]'),
        tabContents = document.querySelectorAll('[data-content]')

tabs.forEach(tab =>{
    tab.addEventListener('click', () =>{
        const target = document.querySelector(tab.dataset.target)

        tabContents.forEach(tabContent => {
            tabContent.classList.remove('qualification__active')
        })
        target.classList.add('qualification__active')

        tabs.forEach(tab =>{
            tab.classList.remove('qualification__active')
        })
        tab.classList.add('qualification__active')
    })
})


/*==================== SERVICES MODAL ====================*/
const modalViews = document.querySelectorAll('.services__modal'),
    modalBtns = document.querySelectorAll('.services__button'),
    modalCloses = document.querySelectorAll('.services__modal-close')

let modal = function(modalClick){
    modalViews[modalClick].classList.add('active-modal')
}

modalBtns.forEach((modalBtn,i) =>{
    modalBtn.addEventListener('click',() =>{
        modal(i)
    })
})

modalCloses.forEach((modalClose) =>{
    modalClose.addEventListener('click', ()=>{
        modalViews.forEach((modalView)=>{
            modalView.classList.remove('active-modal')
        })
    })
})


/*==================== PORTFOLIO SWIPER  ====================*/
// let swiper = new Swiper('.swiper-container',{
//     cssMode : true,
//     loop: true,

//     navigation :{
//         nextE1: '.swiper-button-next',
//         prevE1: '.swiper-button-prev',
//     },
//     pagination:{
//         el: '.swiper-pagination',
//         clickable: true,
//     },    
// });

var swiperPortfolio = new Swiper(".mySwiper", {
    cssMode: true,
    loop: true,

    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    // breakpoints:{
    //     568:{
    //         slidesPerView: 1,
    //     },
    //     768:{
    //         slidesPerView: 2,
    //     }
    // }
   
  });

/*==================== TESTIMONIAL ====================*/
var swiperTestimonial = new Swiper(".mySwiper", {
    loop: true,
    grabCuror: true,
    spaceBetween: 48,

    pagination: {
      el: ".swiper-pagination-testimonial",
      clickable: true,
      dynamicBullets: true
    },
    breakpoints:{
        568:{
            slidesPerView: 2,
        }
    }
   
  });

/*==================== SCROLL SECTIONS ACTIVE LINK ====================*/
const sections = document.querySelectorAll('section[id]')

function scrollActive(){
    const scrollY = window.pageYOffset

    sections.forEach(current =>{
        const sectionHeight = current.offsetHeight
        const sectionTop = current.offsetTop - 50;
        sectionId = current.getAttribute('id')

        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.add('active-link')
        }else{
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.remove('active-link')
        }
    })
}
window.addEventListener('scroll', scrollActive)

/*==================== CHANGE BACKGROUND HEADER ====================*/ 
function scrollHeader(){
    const nav = document.getElementById('header')
    // When the scroll is greater than 200 viewport height, add the scroll-header class to the header tag
    if(this.scrollY >= 80) nav.classList.add('scroll-header'); else nav.classList.remove('scroll-header')
}
window.addEventListener('scroll', scrollHeader)

/*==================== SHOW SCROLL UP ====================*/ 
function scrollUp(){
    const scrollUp = document.getElementById('scroll-up');
    // When the scroll is higher than 560 viewport height, add the show-scroll class to the a tag with the scroll-top class
    if(this.scrollY >= 560) scrollUp.classList.add('show-scroll'); else scrollUp.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollUp)


/*==================== DARK LIGHT THEME ====================*/ 
const themeButton = document.getElementById('theme-button')
const darkTheme = 'dark-theme'
const iconTheme = 'uil-sun'

// Previously selected topic (if user selected)
const selectedTheme = localStorage.getItem('selected-theme')
const selectedIcon = localStorage.getItem('selected-icon')

// We obtain the current theme that the interface has by validating the dark-theme class
const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light'
const getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? 'uil-moon' : 'uil-sun'

// We validate if the user previously chose a topic
if (selectedTheme) {
  // If the validation is fulfilled, we ask what the issue was to know if we activated or deactivated the dark
  document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme)
  themeButton.classList[selectedIcon === 'uil-moon' ? 'add' : 'remove'](iconTheme)
}

// Activate / deactivate the theme manually with the button
themeButton.addEventListener('click', () => {
    // Add or remove the dark / icon theme
    document.body.classList.toggle(darkTheme)
    themeButton.classList.toggle(iconTheme)
    // We save the theme and the current icon that the user chose
    localStorage.setItem('selected-theme', getCurrentTheme())
    localStorage.setItem('selected-icon', getCurrentIcon())
})




//scroll reveal animation
//common reveal options to create reveal animation
ScrollReveal({ 
    reset: true,
    distance: '60px',
    duration: 1800,
    delay:100
 });

//target elements, and specify options to create reveal animation

// ScrollReveal().reveal('.home .home__title, section__title, section__subtitle', {delay:500, origin: 'left'});
// ScrollReveal().reveal('.home .home__subtitle, .home .home__description, about__buttons', {delay:600, origin: 'right'});
// ScrollReveal().reveal('.home .button', {delay:700, origin: 'bottom'});
// ScrollReveal().reveal('.home__social i', {delay:500, origin: 'left', interval: 200});
// ScrollReveal().reveal('.home__img', {delay:500, origin: 'bottom'});













ScrollReveal().reveal('.home .home__title, .section__title, .section__subtitle', { delay: 500,
    origin: 'left' });
ScrollReveal().reveal('.home  .home__subtitle, .home .home__description, .about__buttons', { delay: 600, origin:
    'top' });
ScrollReveal().reveal('.home .button', { delay: 700, origin: 'bottom' });
ScrollReveal().reveal('.home__social i, .contact__information , .about__social-links', { delay: 500, origin: 'left',
    interval: 200 });
ScrollReveal().reveal('.home__img, .about__img', { delay: 500, origin: 'bottom' });
ScrollReveal().reveal(' .contact__form', { delay: 600, origin: 'bottom' });
ScrollReveal().reveal('.about .professional-list li ', { delay: 500, origin: 'right', interval:
    200 });
    ScrollReveal().reveal('.qua1, .qu1,.qu3,.p1,.p3,.p5', { delay: 700, origin: 'left' });
    ScrollReveal().reveal(' .qua2,.qu2,.qu4,.p2,.p4,.p6', { delay: 700, origin: 'top' });
    ScrollReveal().reveal('.ser1,.ser2,.ser3', {  delay: 800, origin: 'bottom', interval: 200 });
ScrollReveal().reveal(' .contact-card, .project, .contact-left h2 ', { delay: 700, origin: 'left' });
ScrollReveal().reveal(' .education, .portfolio .img-card', {
    delay: 800, origin: 'bottom', interval: 200 });
ScrollReveal().reveal('.footer__title,.footer__subtitle,.f1,.f2,.f3', { delay: 500, origin: 'top', interval: 200 });
ScrollReveal().reveal('.f4,.f5,.f6,.f7', { delay: 500, origin: 'top', interval: 200 });
ScrollReveal().reveal('.d1,.d2,.d3,.d4', { delay: 500, origin: 'left', interval: 200 });
ScrollReveal().reveal('.s1,.s2,.s3,.s4,.s5,.s6', { delay: 500, origin: 'left', interval: 200 });
ScrollReveal().reveal('.sk1,.sk2,.sk3,.sk4,.sk5', { delay: 500, origin: 'left', interval: 200 });
ScrollReveal().reveal('.ski1,.ski2,.ski3,.ski4', { delay: 500, origin: 'left', interval: 200 });
ScrollReveal().reveal('.c1,.c2,.c3,.c4,.c5', { delay: 600, origin: 'bottom', interval: 200 });





