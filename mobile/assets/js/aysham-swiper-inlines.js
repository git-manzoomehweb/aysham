var swiper = new Swiper('.swiper-container1', {
    effect: 'coverflow',
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: 'auto',
    // autoplay: {
    //     delay: 5000,
    // },
    loop: true,
    coverflowEffect: {
        rotate: 0,
        stretch: 2,
        depth: 147,
        modifier: 2,
        slideShadows: false,

    },
    initialSlide: 2,
    navigation: {
      nextEl: '.swiper-button-next1',
      prevEl: '.swiper-button-prev1',
      },
      breakpoints: {
        0: {
           slidesPerView: 1,
           spaceBetween: 0,
           },
           750: {
           slidesPerView: 1,
           spaceBetween: 0,
           },
     900: {
     slidesPerView: 1,
     spaceBetween: 0,
     }
     },
});