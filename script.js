const beginBtn = document.querySelector(".begin-btn");
const modal = document.querySelector(".modal");
const welcomeModal = document.querySelector(".welcome");
const rollModal = document.querySelector(".roll-modal");
const breadModal = document.querySelector(".bread-modal");
const mainModal = document.querySelector(".main-modal");
const breadDice = document.querySelector(".bread-roll");
const mainDice = document.querySelector(".main-roll");
const breadNextBtn = document.querySelector(".bread-next");
const mainNextBtn = document.querySelector(".main-next");
const breadDiceImg = document.querySelector(".bread-dice-roll-img");
const mainDiceImg = document.querySelector(".main-dice-roll-img");

const ingredients = {
  bread: ["Uncrustables", "White", "12 Grain", "Potato", "Rye", "Sourdough"],
  main: [
    "Cat Food",
    "Salami",
    "Peanut Butter",
    "Black Forest Ham",
    "Roast Beef",
    "Beans",
  ],
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
  hideFunction(welcomeModal, breadModal);
});

// Bread choice
let isBreadRolled = false;
breadDice.addEventListener("click", function () {
  if (isBreadRolled == false) {
    // 1. Roll the dice for a random number
    let choice = rollDice(); // 0 - 5
    // 2. take number and use it to add bread to sandwich object
    sandwich.bread = ingredients.bread[choice];
    console.log(sandwich);
    // 3. change dice img to correct dice
    breadDiceImg.src = `dice-images/dice${choice + 1}.svg`;
    // 4. Highlight choice
    document.querySelector(`.breadchoice${choice}`).style.background =
      "var(--light-green)";
    // 4. make next button appear
    breadNextBtn.classList.remove("hidden");
  }
  // Make button nonfunctional after choice
  isBreadRolled = true;
});
breadNextBtn.addEventListener("click", function () {
  hideFunction(breadModal, mainModal);
});

let isMainRolled = false;
mainDice.addEventListener("click", function () {
  if (isMainRolled == false) {
    let choice = rollDice(); // 0 - 5
    sandwich.main = ingredients.main[choice];
    console.log(sandwich);
    // 3. change dice img to correct dice
    mainDiceImg.src = `dice-images/dice${choice + 1}.svg`;
    // 4. Highlight choice
    document.querySelector(`.mainchoice${choice}`).style.background =
      "var(--light-green)";
    // 4. make next button appear
    mainNextBtn.classList.remove("hidden");
  }
  // Make button nonfunctional after choice
  isMainRolled = true;
});
