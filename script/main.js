const navBar = document.querySelector('div.nav');
const navLogo = document.querySelector('.nav__logo-white')
const navUl = document.querySelectorAll(".nav__menu-list")
const navH1 = document.querySelector('.company-name-h1')
const navLi = document.querySelectorAll('.li-button');
const navFa = document.querySelectorAll('.fa-brands');
const navBarScroll = 80;



window.addEventListener('scroll', () => {

    if (scrollY > navBarScroll && window.innerWidth > 1024) {
        navBar.classList.add("nav__active")
        navLogo.src = "img/only_logo.png"
        navUl.forEach((li) => {
            li.classList.add('nav__menu-list__active')
        })
        navH1.classList.add('company-name-h1__active')
        navLi.forEach((a) => {
            a.classList.add('li-button__active')
        })
        navFa.forEach((i) => {
            i.classList.add('fa-brands__active')
        })

    } else if (scrollY < navBarScroll && window.innerWidth > 1023) {
        navBar.classList.remove('nav__active');
        navLogo.src = "img/only_logo-white.png"
        navUl.forEach((li) => {
            li.classList.remove('nav__menu-list__active')
        })
        navH1.classList.remove('company-name-h1__active')
        navLi.forEach((a) => {
            a.classList.remove('li-button__active')
        })
        navFa.forEach((i) => {
            i.classList.add('fa-brands__active')
        })
    }
})
const menuButton = document.querySelector('.nav__hamburger');
const menuMobile = document.querySelector('.nav__menu-list')


const mobile = function () {
    menuButton.classList.toggle('nav__hamburer__active');
    menuMobile.classList.toggle('nav__menu-list__mobile');
    menuMobile.classList.toggle('nav__menu-list__active')
}
menuButton.addEventListener('click', mobile);
navLi.forEach((li) => { li.addEventListener('click', mobile) })

// galeria 

const profesions = {
    profesion: '',
}
let id = '';

const minPicture = document.querySelectorAll('.min-picture');
const galleryPicture = document.querySelectorAll(".gallery__picture");
const createH1 = document.createElement('h1');
minPicture.forEach((item, index) => {
    item.addEventListener('click', function () {

        id = this.dataset.control;
        number = index;
        profesions.profesion = this.dataset.option;
        console.log(this.dataset.option);
        minPicture.forEach(function (i) {
            i.classList.remove('is-selected')

        })
        item.classList.add('is-selected');

        item.appendChild(createH1);
        createH1.textContent = profesions.profesion;
        galleryPicture.forEach(function (e, i) {
            e.preventDefault;
            e.classList.add('display-hide')
            if (e.dataset.slide == id) {
                e.classList.remove('display-hide')
            }
        });

    })
})

// const changePartnersElement = function(){
// window.addEventListener('scroll', function(){

// if(window.innerWidth < 1024){
//     document.querySelector('.partners__mobile').classList.remove('hide');
//     document.querySelector('.partners__desktop').classList.add('hide');



// }else {
//     document.querySelector('.partners__mobile').classList.add('hide');
//     document.querySelector('.partners__desktop').classList.remove('hide');


// }
// })

// }

// changePartnersElement();


if (window.innerWidth > 1024) {
    var timer = 4000;

    var i = 0;
    var max = $('#c > .li').length;



    $("#c > li").eq(i).addClass('active').css('left', '0');
    $("#c > li").eq(i + 1).addClass('active').css('left', '25%');
    $("#c > li").eq(i + 2).addClass('active').css('left', '50%');
    $("#c > li").eq(i + 3).addClass('active').css('left', '75%');


    setInterval(function () {

        $("#c > li").removeClass('active');

        $("#c > li").eq(i).css('transition-delay', '0.25s');
        $("#c > li").eq(i + 1).css('transition-delay', '0.5s');
        $("#c > li").eq(i + 2).css('transition-delay', '0.75s');
        $("#c > li").eq(i + 3).css('transition-delay', '1s');

        if (i < max - 4) {
            i = i + 4;
        }

        else {
            i = 0;
        }

        $("#c > li").eq(i).css('left', '0').addClass('active').css('transition-delay', '1.25s');
        $("#c > li").eq(i + 1).css('left', '25%').addClass('active').css('transition-delay', '1.5s');
        $("#c > li").eq(i + 2).css('left', '50%').addClass('active').css('transition-delay', '1.75s');
        $("#c > li").eq(i + 3).css('left', '75%').addClass('active').css('transition-delay', '2s');

    }, timer);
}
let time = 4000;
let number = 0;

const changePictureForMobile = function () {

    if (number === galleryPicture.length) {
        number = 0;
    }
    galleryPicture.forEach(function (item) {
        item.classList.add('display-hide');

    })
    galleryPicture[number].classList.remove('display-hide');
    let slideNumber = galleryPicture[number].dataset.slide;


    minPicture.forEach(function (i) {
        i.classList.remove('is-selected');
    })
    minPicture[number].classList.add('is-selected');
    number++;
}





function handswipe(obj) {
    if (obj == true) {
        clearInterval(changeSlider)
        number--;
        if (number == -1) { number = galleryPicture.length - 1 }
        
        galleryPicture.forEach(function (item) {
            item.classList.add('display-hide');

        })
      
        galleryPicture[number].classList.remove('display-hide');


        minPicture.forEach(function (i) {
            i.classList.remove('is-selected');
        })
        minPicture[number].classList.add('is-selected');
        changeSlider = setInterval(changePictureForMobile, time)
    }

    if (obj == false) {
        clearInterval(changeSlider)
        number++;
        if (number == galleryPicture.length) { number = 0 }
        
        galleryPicture.forEach(function (item) {
            item.classList.add('display-hide');

        })
        
        galleryPicture[number].classList.remove('display-hide');


        minPicture.forEach(function (i) {
            i.classList.remove('is-selected');
        })
        minPicture[number].classList.add('is-selected');
        changeSlider = setInterval(changePictureForMobile, time)
    }

}

// if (window.innerWidth < 819) {
    let changeSlider = setInterval(changePictureForMobile, time);
//  } else { false }

// const touchpanel = document.querySelector('.gallery');
let startX,
    startY,
    threshold = 10,
    swipe,
    check,
    distance;

galleryPicture.forEach(function (touchpanel) {

    touchpanel.addEventListener('touchstart', function (e) {

        let touchobj = e.changedTouches[0];
        check = e.touches[0];
        startX = touchobj.pageX;
        console.log(startX)
        startY = touchobj.pageY;
        distance = 0;
        e.preventDefault();
    })

    touchpanel.addEventListener('touchmove', function (e) {
        
        e.preventDefault();
    })

    touchpanel.addEventListener('touchend', function (e) {
        e.preventDefault();

        let touchobjend = e.changedTouches[0];
        distance = touchobjend.pageX - startX;
        console.log(`Distance: ` + distance)
        if ((distance >= threshold && (touchobjend.pageY - startY) <= 150) > 0) {
            swipe = true
        }
        else { swipe = false }

        console.log(swipe)
        return handswipe(swipe)



    })
})
