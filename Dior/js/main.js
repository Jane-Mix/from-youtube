const swiper = new Swiper('.swiper__top', {
  effect: 'fade',
  autoplay: {
    delay: 3500,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});


const swiperAbout = new Swiper(".slider__about", {
  loop: true,
  slidesPerView: 4,
  spaceBetween: 20,
  freeMode: true,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});

document.querySelectorAll('.accordeon__triger').forEach((item) => {
  item.addEventListener('click', () => {
    item.parentNode.classList.toggle('accordeon__item--active')
  })
});