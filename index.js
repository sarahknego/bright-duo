document.addEventListener("DOMContentLoaded", function() {
const prevArrow = document.querySelector(".prev");
const nextArrow = document.querySelector(".next");
const prevArrowMobile = document.querySelector(".prev-mobile");
const nextArrowMobile = document.querySelector(".next-mobile");
const carouselContainer = document.querySelector(".carousel-container");

  prevArrow.addEventListener("click", function() {
  carouselContainer.scrollBy({
    left: -carouselContainer.offsetWidth,
    behavior: "smooth"
  });
});

prevArrowMobile.addEventListener("click", function() {
  const slide = document.querySelector(".carousel-slide")
  carouselContainer.scrollBy({
    left: -slide.clientWidth,
    behavior: "smooth"
  });
});

nextArrow.addEventListener("click", function() {
  carouselContainer.scrollBy({
    left: carouselContainer.offsetWidth,
    behavior: "smooth"
  });
});

nextArrowMobile.addEventListener("click", function() {
  const slide = document.querySelector(".carousel-slide")
  carouselContainer.scrollBy({
    left: slide.clientWidth,
    behavior: "smooth"
  });
});
});