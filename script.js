// https://bytewebster.com/
// https://bytewebster.com/
// https://bytewebster.com/

var swiper = new Swiper(".swiper", {
  effect: "coverflow",
  grabCursor: true,
  centeredSlides: true,
  slidesPerView: "auto",
  coverflowEffect: {
    rotate: 0,
    stretch: 0,
    depth: 100,
    modifier: 2,
    slideShadows: true
  },
  spaceBetween: 60,
  loop: true,
  autoplay: {
    delay: 5000, // Tempo entre slides em milissegundos (3000ms = 3 segundos)
    disableOnInteraction: false // continua mesmo se o usuário interagir
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true
  }
});
