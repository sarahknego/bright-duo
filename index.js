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
  console.log(carouselContainer.scrollLeft);
});

prevArrowMobile.addEventListener("click", function() {
  const slide = document.querySelector(".carousel-slide")
  carouselContainer.scrollLeft = carouselContainer.scrollLeft - slide.clientWidth;
  if(carouselContainer.scrollLeft < 0) {
    carouselContainer.scrollLeft = 0;
  }
  console.log(carouselContainer.scrollLeft);
  // const slide = document.querySelector(".carousel-slide")
  // carouselContainer.scrollBy({
  //   left: -slide.clientWidth,
  //   behavior: "smooth"
  // });
  // console.log(carouselContainer.scrollLeft);
});

nextArrow.addEventListener("click", function() {
  carouselContainer.scrollBy({
    left: carouselContainer.offsetWidth,
    behavior: "smooth"
  });
  console.log(carouselContainer.scrollLeft);
});

nextArrowMobile.addEventListener("click", function() {
  const slide = document.querySelector(".carousel-slide")
  carouselContainer.scrollBy({
    left: slide.clientWidth,
    behavior: "smooth"
  });
  console.log(carouselContainer.scrollLeft);
});
});