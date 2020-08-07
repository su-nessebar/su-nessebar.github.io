// SLider
let mySwiper = new Swiper('.swiper-container', {
  direction: 'horizontal',
  loop: true,

  pagination: {
    el: '.swiper-pagination',
    type: 'bullets',
    clickable: true,
  },
  autoHeight: false,
  effect: 'slide',
  centeredSlides: true,
  spaceBetween: 10,
  mousewheel: true,
  autoplay: {
    delay: 5000,
  },
  keyboard: {
    enabled: true,
    onlyInViewport: true,
  },
  preloadImages: false,
  lazy: true,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  breakpoints: {
    960: {
      slidesPerView: 2,
    },
    1280: {
      slidesPerView: 3,
    }
  }
});
document.getElementsByClassName('swiper-container')[0].addEventListener('mouseenter', function() {
  mySwiper.autoplay.stop();
});

document.getElementsByClassName('swiper-container')[0].addEventListener('mouseleave',function() {
  mySwiper.autoplay.start();
});