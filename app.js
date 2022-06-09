const hamburgerMenu = document.querySelector("#hamburger");
const menu = document.querySelector("#menu");
const hamburgerLinks = document.querySelectorAll("#hamburgerLinks");
const body = document.querySelector("body");
const moon = document.querySelector("#moon");

hamburgerMenu.addEventListener("click", () => {
  menu.classList.toggle("hidden");
  hamburgerMenu.classList.toggle("bg-white");
});

hamburgerLinks.forEach((link) => {
  link.addEventListener("click", () => {
    menu.classList.toggle("hidden");
    hamburgerMenu.classList.toggle("bg-white");
  });
});

moon.addEventListener("click", () => {
  body.classList.toggle("dark");
});
