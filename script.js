const navMenu = document.getElementById("nav-menu");
const navToggle = document.getElementById("nav-toggle");
const navItem = document.querySelectorAll(".nav__item");
const header = document.getElementById("header");

// Open/Close menu
navToggle.addEventListener("click", () => {
  navMenu.classList.toggle("nav__menu--open");
});

// Close menu on click
navItem.forEach(item => {
  item.addEventListener("click", () => {
    navMenu.classList.remove("nav__menu--open");
  });
});

// Header scroll effect
window.addEventListener("scroll", () => {
  if (window.scrollY > 40) {
    header.classList.add("header--scroll");
  } else {
    header.classList.remove("header--scroll");
  }
});
