const swiper = new Swiper('.swiper-container', {
    // Optional parameters
    direction: 'horizontal',
    slidesPerView: 2,
    initialSlide: 3,
    breakpoints: {
        // when window width is >= 320px
        576: {
            slidesPerView: 2,
            spaceBetween: 20
        },
        // when window width is >= 480px
        768: {
            slidesPerView: 3,
            spaceBetween: 20
        },
        // when window width is >= 640px
        992: {
            slidesPerView: 6,
            spaceBetween: 20
        },
        1200: {
            slidesPerView: 8,
            spaceBetween: 20
        }
    }
});