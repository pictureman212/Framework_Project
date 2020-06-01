const carouselSlide = document.querySelector(".карусель-slide");
const carouselImages = document.querySelectorAll(".карусель-slide img");

//buttons
const prevBtn = document.querySelector(".previous-image");
const nextBtn = document.querySelector(".next-image");

//counter
let counter = 0;
const size = carouselImages[0].getBoundingClientRect().width;

//button listeners
nextBtn.addEventListener("click", () => {
  if (counter >= carouselImages.length - 1) return;
  carouselSlide.style.transition = "transform 0.4s ease-in-out";
  counter++;
  carouselSlide.style.transform = "translateX(" + -size * counter + "px)";
});

prevBtn.addEventListener("click", () => {
  if (counter <= 0) return;
  carouselSlide.style.transition = "transform 0.4s ease-in-out";
  counter--;
  carouselSlide.style.transform = "translateX(" + -size * counter + "px)";
});
