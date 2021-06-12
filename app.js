"use stric";

const specialArrow = document.querySelector(".special");
const moreAbout = document.querySelector(".more-about");
const specialText = document.querySelector(".special-text");

function arrowToggle() {
  moreAbout.classList.toggle("show");
  specialArrow.classList.toggle("arrow-up");
  specialText.classList.toggle("bold");
}

specialArrow.addEventListener("click", arrowToggle);
