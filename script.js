const beginBtn = document.querySelector(".begin-btn");
const modal = document.querySelector(".modal");
const welcomeModal = document.querySelector(".welcome");
const rollModal = document.querySelector(".roll-modal");
const breadDice = document.querySelector(".bread-roll");

const ingredients = {
  bread: ["Uncrustables", "White", "12 Grain", "Potato", "Rye", "Sourdough"],
  main: [],
  roughage: [],
  wildMagic: [],
  sauce: [],
};

const sandwich = {};

// FUNCTIONS
// Roll Dice
const rollDice = function () {
  let choice = Math.trunc(Math.random() * 6);
  return choice;
};

const hideFunction = function (hide, reveal) {
  hide.classList.add("hidden");
  reveal.classList.remove("hidden");
};

// EVENT LISTENERS
beginBtn.addEventListener("click", function () {
  hideFunction(welcomeModal, rollModal);
});

// Bread choice
breadDice.addEventListener("click", function () {
  // 1. Roll the dice for a random number
  let breadChoice = rollDice(); // 0 - 5
  // 2. take number and use it to add bread to sandwich object
  sandwich.bread = ingredients.bread[breadChoice];
  console.log(sandwich);
  // 3. change dice img to correct dice

  console.log(breadChoice);
});
