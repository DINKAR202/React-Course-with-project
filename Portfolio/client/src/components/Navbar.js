document.addEventListener("DOMContentLoaded", function () {
  const menuToggle = document.querySelector(".menu-toggle");
  const nav = document.querySelector("nav");

  // Toggle navigation display when the button is clicked
  menuToggle.addEventListener("click", function () {
    nav.classList.toggle("active");
  });
});
