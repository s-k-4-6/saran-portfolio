/* ===== NAVBAR SCROLL EFFECT ===== */
const header = document.getElementById("header");
window.addEventListener("scroll", () => {
    if (window.scrollY > 40) {
        header.classList.add("scroll");
    } else {
        header.classList.remove("scroll");
    }
});

/* ===== MOBILE MENU ===== */
const navToggle = document.getElementById("nav-toggle");
const navMenu = document.getElementById("nav-menu");

navToggle.addEventListener("click", () => {
    navMenu.classList.toggle("open");
});

