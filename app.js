"use strict";

const move = document.querySelectorAll(".move");

// Hover each move
move.forEach((move) => {
  move.addEventListener("mouseover", function () {
    move.classList.add("hover");
  });
  move.addEventListener("mouseout", function () {
    move.classList.remove("hover");
  });
  move.addEventListener("click", function () {
    console.log(`you chose ${move.textContent} `);
  });
});
