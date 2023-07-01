const swiper = new Swiper('.swiper-container', {
    slidesPerView: 1,
    spaceBetween: 0,
    loop: true,
    // пагинация
    pagination: {
        el: '.swiper-pagination',
        type: 'bullets',
        clickable: true,
    },
    // навигация
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    scrollbar: {
      hide: true,
    },

    autoplay:{
        delay: 5000,
    },

});


const swiper2 = new Swiper('.swiper2-container', {
    slidesPerView: 3,
    slidesPerGroup: 3,
    spaceBetween: 50,
    clickable: true,
    // навигация
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },

    scrollbar: {
      hide: true,
    },

    pagination:{
        el: '.swiper-pagination',
        type: 'fraction',
    },

    a11y: {
        prevSlideMessage: 'Предыдущий слайд',
        nextSlideMessage: 'Следующий слайд',
        lastSlideMessage: 'Это последний слайд в подборке',
    },

    breakpoints: {
    300:{
        slidesPerView: 1,
        slidesPerGroup: 1,
        spaceBetween: 38,
    },

    768: {
        slidesPerView: 2,
        slidesPerGroup: 1,
        spaceBetween: 38,
    },

    1000:{
        slidesPerView: 2,
        spaceBetween: 35,
    },

    1200: {
        spaceBetween: 50,
        slidesPerView: 3,
    },
  },
});


const swiper3 = new Swiper('.swiper3-container', {
    slidesPerView: 3,
    slidesPerGroup: 3,
    spaceBetween: 50,

    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },

    pagination:{
        el: '.swiper-pagination',
    },

    a11y: {
        prevSlideMessage: 'Предыдущий слайд',
        nextSlideMessage: 'Следующий слайд',
        lastSlideMessage: 'Это последний слайд в подборке',
    },

    breakpoints: {
        300:{
            slidesPerView: 1,
            slidesPerGroup: 1,
            initialSlide: 0,
        },

        600:{
            slidesPerView: 2,
            slidesPerGroup: 1,
            spaceBetween: 34,
            initialSlide: 0,
        },

        1000:{
            slidesPerView: 3,
            slidesPerGroup: 2,
            spaceBetween: 27,
            initialSlide: 0,
        },

        1200:{
            spaceBetween: 50,
            slidesPerView: 3,
            initialSlide: 0,
        },
    }
})

const swiper4 = new Swiper('.swiper4-container', {
    slidesPerView: 3,
    slidesPerGroup: 3,
    spaceBetween: 50,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },

    a11y: {
        prevSlideMessage: 'Предыдущий слайд',
        nextSlideMessage: 'Следующий слайд',
        lastSlideMessage: 'Это последний слайд в подборке',
    },

    breakpoints: {
        300:{
            slidesPerView: 1,
            slidesPerGroup: 1,
        },

        680: {
          slidesPerView: 2,
          slidesPerGroup: 1,
          spaceBetween:34,
        },
        
        1000:{
            slidesPerView: 2,
            spaceBetween: 50,
        },

        1200:{
            slidesPerView: 3,
        },
    }
    
});
