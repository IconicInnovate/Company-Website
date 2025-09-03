// Elements
const menuToggle = document.getElementById("menu-toggle");
const mobileMenu = document.getElementById("mobile-menu");
const closeMenu = document.getElementById("close-menu");
const overlay = document.getElementById("overlay");

// Open menu
menuToggle.addEventListener("click", () => {
  mobileMenu.classList.add("open");
  overlay.style.opacity = "1";
  overlay.style.visibility = "visible";
});

// Close menu
closeMenu.addEventListener("click", () => {
  mobileMenu.classList.remove("open");
  overlay.style.opacity = "0";
  overlay.style.visibility = "hidden";
});

// Close when clicking overlay
overlay.addEventListener("click", () => {
  mobileMenu.classList.remove("open");
  overlay.style.opacity = "0";
  overlay.style.visibility = "hidden";
});

// Scroll Fade-in Animation
const fadeElements = document.querySelectorAll(".fade-scroll");

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
      }
    });
  },
  { threshold: 0.2 }
);

fadeElements.forEach((el) => observer.observe(el));
