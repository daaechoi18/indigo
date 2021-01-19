var mySwiper = new Swiper('.swiper-container', {
  // Optional parameters
  loop: true,
  autoplay: {
    delay: 3200,
    disableOnInteraction: false,
  },
  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
})