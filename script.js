function toggleMenu() {
    const navbar = document.querySelector('.navbar');
    navbar.classList.toggle('show');
}



// Initialize Swiper
var swiper = new Swiper('.home-slider', {
    loop: true, // Allows the slider to loop back to the beginning
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    autoplay: {
        delay: 5000, // Autoplay slides every 5 seconds
        disableOnInteraction: false, // Continue autoplay after user interaction
    },
    effect: 'fade', // Adds a fade transition effect
    fadeEffect: {
        crossFade: true
    },
    grabCursor: true, // Changes cursor to grab icon
    slidesPerView: 1, // Shows one slide at a time
    spaceBetween: 0, // No space between slides
    breakpoints: {
        768: {
            slidesPerView: 1,
            spaceBetween: 0,
        },
        480: {
            slidesPerView: 1,
            spaceBetween: 0,
        }
    }
});


document.addEventListener("DOMContentLoaded", function () {
    const images = document.querySelectorAll('.about-photo img');

    images.forEach((img) => {
        img.classList.add('fade-in');
    });
});

