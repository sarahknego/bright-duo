document.addEventListener("DOMContentLoaded", function() {
const prevArrow = document.querySelector(".prev");
const nextArrow = document.querySelector(".next");
const prevArrowMobile = document.querySelector(".prev-mobile");
const nextArrowMobile = document.querySelector(".next-mobile");
const carouselContainer = document.querySelector(".carousel-container");

  prevArrow.addEventListener("click", function() {
  const slide = document.querySelector(".carousel-slide")
  carouselContainer.scrollLeft = carouselContainer.scrollLeft - slide.clientWidth;
  if(carouselContainer.scrollLeft < 0) {
    carouselContainer.scrollLeft = 0;
  }
});

prevArrowMobile.addEventListener("click", function() {
  const slide = document.querySelector(".carousel-slide")
  carouselContainer.scrollLeft = carouselContainer.scrollLeft - slide.clientWidth;
  if(carouselContainer.scrollLeft < 0) {
    carouselContainer.scrollLeft = 0;
  }
});

nextArrow.addEventListener("click", function() {
  const slide = document.querySelector(".carousel-slide")
  carouselContainer.scrollLeft = carouselContainer.scrollLeft + slide.clientWidth;
  if(carouselContainer.scrollLeft > carouselContainer.scrollWidth) {
    carouselContainer.scrollLeft = carouselContainer.scrollWidth;
  }
});

nextArrowMobile.addEventListener("click", function() {
  const slide = document.querySelector(".carousel-slide")
  carouselContainer.scrollLeft = carouselContainer.scrollLeft + slide.clientWidth;
  if(carouselContainer.scrollLeft > carouselContainer.scrollWidth) {
    carouselContainer.scrollLeft = carouselContainer.scrollWidth;
  }
});
});