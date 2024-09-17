let menuBtn = document.querySelector("#menu-btn");
let navbar = document.querySelector('.navbar');

menuBtn.addEventListener("click", function () {
    console.log("clicked");
    menuBtn.classList.toggle('fa-times');
    navbar.classList.toggle('open');
});