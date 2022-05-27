const navBar = document.querySelector('div.nav');
const navLogo = document.querySelector('.nav__logo')
const navUl = document.querySelectorAll(".nav__menu-list")
const navH1 = document.querySelector('.company-name-h1')
const navLi = document.querySelectorAll('.li-button');
const navFa = document.querySelectorAll('.fa-brands');
const navBarScroll= 80;

window.addEventListener('scroll',() => {
    console.log(scrollY);
    if (scrollY > navBarScroll){
        navBar.classList.add("nav__active")
        navLogo.src = "img/only_logo.png"
        navUl.forEach((li) =>{
            li.classList.add('nav__menu-list__active')})
        navH1.classList.add('company-name-h1__active')
        navLi.forEach((a) => {
            a.classList.add('li-button__active')}) 
         navFa.forEach((i) => {
             i.classList.add('fa-brands__active')
         })      
        
    }else if (scrollY< navBarScroll){
        navBar.classList.remove('nav__active');
        navLogo.src = "img/only_logo-white.png"
        navUl.forEach((li) =>{
            li.classList.remove('nav__menu-list__active')})
            navH1.classList.remove('company-name-h1__active')
            navLi.forEach((a) => {
                a.classList.remove('li-button__active')}) 
            navFa.forEach((i) => {
                i.classList.add('fa-brands__active')
            })     
    }
})


// galeria 

let id = '';
const minPicture = document.querySelectorAll('.min-picture');
const galleryPicture = document.querySelectorAll(".gallery__picture");

minPicture.forEach((item) => {
    item.addEventListener('click', function(){
        
        id = this.dataset.control;
       
        minPicture.forEach(function(i){
            i.classList.remove('is-selected')
        })      
            item.classList.add('is-selected')  

            galleryPicture.forEach(function(e, i){
                e.preventDefault;
                e.classList.add('display-hide')
                if(e.dataset.slide == id){
                e.classList.remove('display-hide')     
                }
              });
           
    }) 
    })


    var timer = 4000;

var i = 0;
var max = $('#c > .li').length;
 
	$("#c > li").eq(i).addClass('active').css('left','0');
	$("#c > li").eq(i + 1).addClass('active').css('left','25%');
	$("#c > li").eq(i + 2).addClass('active').css('left','50%');
	$("#c > li").eq(i + 3).addClass('active').css('left','75%');
 

	setInterval(function(){ 

		$("#c > li").removeClass('active');

		$("#c > li").eq(i).css('transition-delay','0.25s');
		$("#c > li").eq(i + 1).css('transition-delay','0.5s');
		$("#c > li").eq(i + 2).css('transition-delay','0.75s');
		$("#c > li").eq(i + 3).css('transition-delay','1s');

		if (i < max-4) {
			i = i+4; 
		}

		else { 
			i = 0; 
		}  

		$("#c > li").eq(i).css('left','0').addClass('active').css('transition-delay','1.25s');
		$("#c > li").eq(i + 1).css('left','25%').addClass('active').css('transition-delay','1.5s');
		$("#c > li").eq(i + 2).css('left','50%').addClass('active').css('transition-delay','1.75s');
		$("#c > li").eq(i + 3).css('left','75%').addClass('active').css('transition-delay','2s');
	
	}, timer);
 