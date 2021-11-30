// function setDimensions() {
//   // Get the viewport height and multiple it by 1% to get a value for a vh unit
//   const vh = window.innerHeight * 0.01;
//   // Set the value in the --vh custom property to the root of the document
//   document.documentElement.style.setProperty("--vh", `${vh}px`);
// }

// setDimensions();
// window.addEventListener("resize", setDimensions);

/* Get nav height for anchor links */

const setNavHeight = function () {
  const nav = document.querySelector(".navbar");
  const root = document.querySelector(":root");
  root.style.setProperty("--navHeight", `${nav.clientHeight * 1}px`);
};

window.addEventListener("resize", setNavHeight);
window.addEventListener("DOMContentLoaded", setNavHeight);

/* Newsletter dropdown */

const exitNewsletter = document.querySelector(".exitNewsletter");
const newsletter = document.querySelector(".newsletter-dropdown");
const navbar = document.querySelector(".navbar");
const open = document.querySelector(".open");
const dropdownMenu = document.querySelector(".nav-menu");

const hideNewsletter = exitNewsletter.addEventListener(
  "click",
  function (event) {
    newsletter.style.display = "none";
    navbar.style.marginTop = 0;
    dropdownMenu.style.top = 64 + "px";
  }
);

/* Navigation */

const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", mobileMenu);

function mobileMenu() {
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
}

const navLink = document.querySelectorAll(".nav-link");

navLink.forEach((n) => n.addEventListener("click", closeMenu));

function closeMenu() {
  hamburger.classList.remove("active");
  navMenu.classList.remove("active");
}

/* Btn change image for "Design your smoove"-section */

const img = document.querySelector(".mod-img-wrapper img");
const btnCoffee = document.querySelector(".mod-body-wrapper .btn-coffee");
const btnPine = document.querySelector(".mod-body-wrapper .btn-pine");

btnCoffee.addEventListener("click", () => {
  img.src = "./assets/large/studiocoffee.webp";
});

btnPine.addEventListener("click", () => {
  img.src = "./assets/large/studiogreen.webp";
});
<<<<<<< Updated upstream
=======

/* Btn change image for "Store bottle" */

const image = document.querySelector(".bottle-store");
const btnBlue = document.querySelector(".bottle-buttons .btn-teal");
const btnGreen = document.querySelector(".bottle-buttons .btn-pine");

btnBlue.addEventListener("click", () => {
  image.src = "./assets/store/Bottle_blue_POST_new.webp";
});

btnGreen.addEventListener("click", () => {
  image.src = "./assets/store/Bottle_green_POST.webp";
});
>>>>>>> Stashed changes
