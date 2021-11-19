function setDimensions() {
  // Get the viewport height and multiple it by 1% to get a value for a vh unit
  const vh = window.innerHeight * 0.01;
  // Set the value in the --vh custom property to the root of the document
  document.documentElement.style.setProperty("--vh", `${vh}px`);
}

setDimensions();
window.addEventListener("resize", setDimensions);

const exitNewsletter = document.querySelector('.exitNewsletter');
const newsletter = document.querySelector('.newsletter-dropdown');
const navbar = document.querySelector('.menu');
const open = document.querySelector('.open');

const hideNewsletter = exitNewsletter.addEventListener('click', function(event) {
  newsletter.style.display = "none";
  navbar.style.marginTop = 0;
})
