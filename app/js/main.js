const swiper = new Swiper('.accessories__slider', {
    slidesPerView: 3,
    spaceBetween: 40,
    loop: true,
    navigation: {
        nextEl: '.arrow-slider-prew"',
        prevEl: '.arrow-slider-next',
    },
});