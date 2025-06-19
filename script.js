new Swiper(".swiper", {
  navigation: {
    nextEl: ".swiper-button-sled",
    prevEl: ".swiper-button-nazad",
  },
  pagination: {
    el: ".swiper-pagination",

    clickable: true,
    // renderBullet: function (index, className) {
    // return '<span class="' + className + '">'
    // + (index + 1) + '</span>';}
  },
});
