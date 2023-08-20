"use strict";

const move = document.querySelectorAll(".move");
const narration = document.querySelector(".narration");
const enemyHealth = document.querySelector("#enemy_health");
const playerHealth = document.querySelector("#player_health");
const enemyHealthBars = [];
const playerHealthBars = [];
let turn = 0;

// Enemy Health Bars
for (let i = 0; i < 100; i++) {
  let cell = document.createElement("div");
  cell.classList.add("cell");
  cell.classList.add("healthy");
  enemyHealth.appendChild(cell);
  enemyHealthBars.push(cell);
}

// Player Health Bars
for (let i = 0; i < 100; i++) {
  let cell = document.createElement("div");
  cell.classList.add("cell");
  cell.classList.add("healthy");
  playerHealth.appendChild(cell);
  playerHealthBars.push(cell);
}

// Player actions
move.forEach((move) => {
  //#region Hover over move
  move.addEventListener("mouseover", function () {
    move.classList.add("hover");
  });
  move.addEventListener("mouseout", function () {
    move.classList.remove("hover");
  });
  //#endregion

  // Choose move
  move.addEventListener("click", function () {
    let enemyHealth = enemyHealthBars.length - 1;
    switch (move.textContent) {
      case "Scratch":
        narration.textContent = "pikachu used scratch!";
        for (let i = enemyHealth; i > enemyHealth - 20; i--) {
          enemyHealthBars[i].classList.remove("healthy");
          enemyHealthBars.pop(i);
        }
        break;
      case "Thunder":
        narration.textContent = "pikachu used thunder!";
        for (let i = enemyHealth; i > enemyHealth - 40; i--) {
          enemyHealthBars[i].classList.remove("healthy");
          enemyHealthBars.pop(i);
        }
        break;
      case "Spark":
        narration.textContent = "pikachu used spark!";
        break;
      case "Reflex":
        narration.textContent = "pikachu used reflex!";
        break;
    }
  });
});

class Pokemon {
  constructor(name, health, accuracy, lvl, img) {
    this.name = name;
    this.health = health;
    this.accuracy = accuracy;
    this.lvl = lvl;
    this.img = img;
  }
}

//#region pokemons
let pikachu = new Pokemon(
  "pikachu",
  1000,
  100,
  5,
  "pokemon/pikachu_player.png"
);
let ekans = new Pokemon("ekans", 800, 100, 7, "pokemon/ekans.png");
let arbok = new Pokemon("arbok", 1300, 100, 10, "pokemon/arbok.png");
let charmander = new Pokemon(
  "charmander",
  1000,
  100,
  7,
  "pokemon/charmander_player.png"
);
//#endregion
