// Pequeñas animaciones de scroll (ejemplo)
document.addEventListener("scroll", () => {
  const elements = document.querySelectorAll(".service-card");
  elements.forEach(el => {
    const position = el.getBoundingClientRect().top;
    if (position < window.innerHeight - 100) {
      el.classList.add("animate__fadeIn");
    }
  });
});
