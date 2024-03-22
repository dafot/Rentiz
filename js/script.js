"use strinct";
const menuIcon = document.querySelector(".menu-icon");
const menu = document.querySelector(".menu");
const body = document.body;


menuIcon.addEventListener("click", () => {
  menu.classList.toggle("_active");
  menuIcon.classList.toggle("_active");
  body.classList.toggle("_lock");
})

const filter = document.querySelector(".filter");

if(filter){
  const items = document.querySelectorAll(".block-filter");
  
  items.forEach((item) => {
    item.addEventListener("click", (event) => {
      item.querySelector('.block-filter__dropdown').classList.toggle('_active');
      item.querySelector('.block-filter__icon').classList.toggle('_active');

      if(event.target.classList.contains('block-filter__item')){
        item.querySelector('.block-filter__value').textContent=event.target.textContent;
      }
    })
  })
}

// Swiper JS
const popularSlider = new Swiper('.popular-slider',{
  spaceBetween: 20,
  slidesPerView: 1,
  loop: true,
  // Navigation arrows
  navigation: {
    nextEl: '.popular-slider-btn-next',
    prevEl: '.popular-slider-btn-prev',
  },
  breakpoints: {
    // when window width is >= 320px
    992: {
      slidesPerView: 3,
    },
    660: {
      slidesPerView: 2,
    }
  }
});

const reviewsSlider = new Swiper('.reviews-slider',{
  spaceBetween: 20,
  slidesPerView: 1,
  autoHeight: true, 
  
  // Navigation arrows
  navigation: {
    nextEl: '.reviews-slider-btn-next',
    prevEl: '.reviews-slider-btn-prev',
  },

});
