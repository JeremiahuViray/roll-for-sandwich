const beginBtn = document.querySelector(".begin-btn");
const modal = document.querySelector(".modal");
const welcomeModal = document.querySelector(".welcome");
// Modals
const rollModal = document.querySelector(".roll-modal");
const breadModal = document.querySelector(".bread-modal");
const mainModal = document.querySelector(".main-modal");
const cheeseModal = document.querySelector(".cheese-modal");
const roughageModal = document.querySelector(".roughage-modal");
const wildModal = document.querySelector(".wild-modal");
const sauceModal = document.querySelector(".sauce-modal");
// Buttons
const breadDice = document.querySelector(".bread-roll");
const breadNextBtn = document.querySelector(".bread-next");
const mainDice = document.querySelector(".main-roll");
const mainNextBtn = document.querySelector(".main-next");
const cheeseDice = document.querySelector(".cheese-roll");
const cheeseNextBtn = document.querySelector(".cheese-next");
const roughageDice = document.querySelector(".roughage-roll");
const roughageNextBtn = document.querySelector(".roughage-next");
const wildDice = document.querySelector(".wild-roll");
const wildNextBtn = document.querySelector(".wild-next");
const sauceDice = document.querySelector(".sauce-roll");
const sauceNextBtn = document.querySelector(".sauce-next");
// Images
const breadDiceImg = document.querySelector(".bread-dice-roll-img");
const mainDiceImg = document.querySelector(".main-dice-roll-img");
const cheeseDiceImg = document.querySelector(".cheese-dice-roll-img");
const roughageDiceImg = document.querySelector(".roughage-dice-roll-img");
const wildDiceImg = document.querySelector(".wild-dice-roll-img");
const sauceDiceImg = document.querySelector(".sauce-dice-roll-img");

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
  cheese: ["Cheddar", "Gouda", "Swiss", "Provolone", "Brie", "Vegan"],
  roughage: ["Lettuce", "Tomato", "Kimchi", "Raisins", "A Wet Sock", "Onions"],
  wildMagic: [
    "Popcorn",
    "More Beans",
    "Home Depot Chocolate",
    "Boneless Wings",
    "Fried Tofu",
    "Burger Patty",
  ],
  sauce: [
    "Marshmallow Fluff",
    "Ketchup",
    "Mayo",
    "Canes Sauce",
    "Canola Oil",
    "Maple Syrup",
  ],
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

const rollFunction = function (isRolled, diceImg, choiceSelect, nextBtn) {
  let choice = rollDice(); // 0 - 5
  if (isRolled == false) {
    // 3. change dice img to correct dice
    diceImg.src = `dice-images/dice${choice + 1}.svg`;
    // 4. Highlight choice
    document.querySelector(`.${choiceSelect}${choice}`).style.background =
      "var(--light-green)";
    // 4. make next button appear
    nextBtn.classList.remove("hidden");
  }
  return choice;
};
// EVENT LISTENERS
beginBtn.addEventListener("click", function () {
  hideFunction(welcomeModal, breadModal);
});

// Bread Event
let isBreadRolled = false;
breadDice.addEventListener("click", function () {
  const choice = rollFunction(
    isBreadRolled,
    breadDiceImg,
    "breadchoice",
    breadNextBtn
  );
  isBreadRolled = true;
  sandwich.bread = ingredients.bread[choice];
});
breadNextBtn.addEventListener("click", function () {
  hideFunction(breadModal, mainModal);
});

// Main Event
let isMainRolled = false;
mainDice.addEventListener("click", function () {
  const choice = rollFunction(
    isMainRolled,
    mainDiceImg,
    "mainchoice",
    mainNextBtn
  );
  sandwich.main = ingredients.main[choice];
  isMainRolled = true;
});

mainNextBtn.addEventListener("click", function () {
  hideFunction(mainModal, cheeseModal);
});
// Main end

// Cheese
let isCheeseRolled = false;
cheeseDice.addEventListener("click", function () {
  const choice = rollFunction(
    isCheeseRolled,
    cheeseDiceImg,
    "cheesechoice",
    cheeseNextBtn
  );
  sandwich.cheese = ingredients.cheese[choice];
  isCheeseRolled = true;
});
cheeseNextBtn.addEventListener("click", function () {
  hideFunction(cheeseModal, roughageModal);
});
// Cheese End

// Roughage
let isRoughageRolled = false;
roughageDice.addEventListener("click", function () {
  const choice = rollFunction(
    isRoughageRolled,
    roughageDiceImg,
    "roughagechoice",
    roughageNextBtn
  );
  sandwich.roughage = ingredients.roughage[choice];
  isRoughageRolled = true;
});
roughageNextBtn.addEventListener("click", function () {
  hideFunction(roughageModal, wildModal);
});
// Roughage End

// Wild
let isWildRolled = false;
wildDice.addEventListener("click", function () {
  const choice = rollFunction(
    isWildRolled,
    wildDiceImg,
    "wildchoice",
    wildNextBtn
  );
  sandwich.wildMagic = ingredients.wildMagic[choice];
  isWildRolled = true;
});

wildNextBtn.addEventListener("click", function () {
  hideFunction(wildModal, sauceModal);
});
// Wild End

// Sauce
let isSauceRolled = false;
sauceDice.addEventListener("click", function () {
  const choice = rollFunction(
    isSauceRolled,
    sauceDiceImg,
    "saucechoice",
    sauceNextBtn
  );
  sandwich.sauce = ingredients.sauce[choice];
  isSauceRolled = true;
  console.log(sandwich);
});

sauceNextBtn.addEventListener("click", function () {
  hideFunction(sauceModal, sauceModal);
});

// Sauce End
