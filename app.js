"use strict";

const question = document.querySelectorAll(".question");
const answer = document.querySelectorAll(".answer");
const arrowDown = document.querySelectorAll(".arrow-down");

for (let i = 0; i < arrowDown.length; i++) {
  arrowDown[i].addEventListener("click", function () {
    answer[i].classList.toggle("show");
    arrowDown[i].classList.toggle("arrow-up");
    question[i].classList.toggle("bold");
  });
}
