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

function effective() {
  narration.textContent = "it was effective!";
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
          //   setTimeout(effective, 1000);
        }
        break;
      case "Thunder":
        // narration.textContent = "pikachu used thunder!";
        for (let i = enemyHealth; i > enemyHealth - 40; i--) {
          enemyHealthBars[i].classList.remove("healthy");
          enemyHealthBars.pop(i);
          setTimeout(makeLightning2, 500);
          setTimeout(eraseLightning2, 700);
          setTimeout(makeLightning1, 900);
          setTimeout(eraseLightning1, 1200);
        }
        break;
      case "Spark":
        narration.textContent = "pikachu used spark!";
        break;
      case "Reflex":
        narration.textContent = "pikachu used reflex!";
        break;
    }
    turn = turn === 0 ? 1 : 0;
    setTimeout(enemyTurn, 1000);
  });
});

// Enemy Turn
function enemyTurn() {
  const enemyMoves = ["bite", "poison", "coil", "gunk shot"];
  let enemyDice = Math.floor(Math.random() * 4);
  let enemyChoice = enemyMoves[enemyDice];
  narration.textContent = `ekans used ${enemyChoice}`;
  setTimeout(effective, 1000);
  for (let i = playerHealth; i > playerHealth - 20; i--) {
    playerHealthBars[i].classList.remove("healthy");
    playerHealthBars.pop(i);
    setTimeout(effective, 1000);
  }
}

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

//#region lightning functions
function makeLightning1() {
  const lightning1 = document.querySelector(".lightning1");
  lightning1.classList.remove("hidden");
}
function eraseLightning1() {
  const lightning1 = document.querySelector(".lightning1");
  lightning1.classList.add("hidden");
}
function makeLightning2() {
  const lightning2 = document.querySelector(".lightning2");
  lightning2.classList.remove("hidden");
}
function eraseLightning2() {
  const lightning2 = document.querySelector(".lightning2");
  lightning2.classList.add("hidden");
}
//#endregion
