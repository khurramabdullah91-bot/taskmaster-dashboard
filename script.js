document.addEventListener("DOMContentLoaded", () => {

  /* ===== NAVBAR SCROLL EFFECT ===== */
  const nav = document.getElementById("navbar");
  if (nav) {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 50) {
        nav.style.background = "rgba(2,6,23,0.9)";
      } else {
        nav.style.background = "rgba(2,6,23,0.7)";
      }
    });
  }

  /* ===== SECTION SCROLL ANIMATION ===== */
  const sections = document.querySelectorAll(".section");
  window.addEventListener("scroll", () => {
    sections.forEach(sec => {
      const top = sec.getBoundingClientRect().top;
      if (top < window.innerHeight - 100) {
        sec.style.opacity = 1;
        sec.style.transform = "translateY(0)";
      }
    });
  });

  /* ===== TESTIMONIALS SLIDER ===== */
  const slider = document.getElementById("testimonial-slider");
  if (slider) {
    let slideIndex = 0;
    const cardWidth = 340;

    setInterval(() => {
      slideIndex++;
      slider.scrollTo({
        left: slideIndex * cardWidth,
        behavior: "smooth"
      });
      if (slideIndex >= slider.children.length) slideIndex = 0;
    }, 3000);
  }

  /* ===== MOBILE NAVBAR TOGGLE ===== */
  const toggle = document.getElementById("menu-toggle");
  const navList = document.querySelector("nav ul");

  if (toggle && navList) {
    toggle.addEventListener("click", () => {
      navList.classList.toggle("show");
    });
  }

});

document.addEventListener("DOMContentLoaded", () => {

  const nav = document.getElementById("navbar");
  if (nav) {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 50) nav.style.background = "rgba(2,6,23,0.9)";
      else nav.style.background = "rgba(2,6,23,0.7)";
    });
  }

  const sections = document.querySelectorAll(".section");

  // ===== INITIAL VISIBILITY CHECK =====
  sections.forEach(sec => {
    const top = sec.getBoundingClientRect().top;
    if (top < window.innerHeight - 100) {
      sec.style.opacity = 1;
      sec.style.transform = "translateY(0)";
    }
  });

  window.addEventListener("scroll", () => {
    sections.forEach(sec => {
      const top = sec.getBoundingClientRect().top;
      if (top < window.innerHeight - 100) {
        sec.style.opacity = 1;
        sec.style.transform = "translateY(0)";
      }
    });
  });

  const slider = document.getElementById("testimonial-slider");
  if (slider) {
    let slideIndex = 0;
    const cardWidth = 340;

    setInterval(() => {
      slideIndex++;
      slider.scrollTo({
        left: slideIndex * cardWidth,
        behavior: "smooth"
      });
      if (slideIndex >= slider.children.length) slideIndex = 0;
    }, 3000);
  }

  const toggle = document.getElementById("menu-toggle");
  const navList = document.querySelector("nav ul");
  if (toggle && navList) {
    toggle.addEventListener("click", () => navList.classList.toggle("show"));
  }

});
