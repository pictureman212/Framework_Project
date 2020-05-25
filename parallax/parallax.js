function parallax(element, distance, speed) {
  const item = document.querySelector(element);
  item.style.transform = `translateY(${distance * speed}px)`;
}

window.addEventListener("scroll", function () {
  parallax(".parallax-container", window.scrollY, 1);
  parallax(".parallax-fast", window.scrollY, 0.1);
  parallax(".parallax-faster", window.scrollY, 0.2);
  parallax(".parallax-fastest", window.scrollY, 0.4);
});
