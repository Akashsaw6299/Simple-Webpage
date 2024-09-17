let menuBtn = document.querySelector("#menu-btn");
let navbar = document.querySelector('.navbar');

menuBtn.addEventListener("click", function () {
    console.log("clicked");
    menuBtn.classList.toggle('fa-times');
    navbar.classList.toggle('open');
});


const swiper = new Swiper('.slider-wrapper', {
    loop: true,
    grabCursor:true,
    spaceBetween:30,
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
      clickable:true,
      dynamicBullets:true
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },

    //responsive breakpoints
    breakpoints:{
        0:{
            slidesPerView: 1
        },
        620:{
            slidesPerView:2
        },
        1024: {
            slidesPerView: 4
        }
    }

  });