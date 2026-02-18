const burgerMenu = document.getElementById("burger");
const nav = document.getElementById("nav");
const btn = document.querySelector(".btn");
burgerMenu.addEventListener("click", function () {
  nav.classList.toggle("active");
  btn.classList.toggle("active");

  console.log("active");
});
