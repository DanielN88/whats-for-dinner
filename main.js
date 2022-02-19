var sides = ["Miso Glazed Carrots", "Coleslaw", "Garden Salad", "Crispy Potatoes", "Sweet Potato Tots", "Coconut Rice", "Caeser Salad", "Shrimp Summer Rolls", "Garlic Butter Mushrooms", "Hush Puppies"];

var mains = ["Spaghetti and Meatballs", "Pineapple Chicken", "Shakshuka", "Thai Yellow Curry", "Bibimbap", "Chicken Parmesean", "Butternut Squash Soup", "BBQ Chicken Burgers", "Ramen", "Empanadas", "Chicken Fried Rice", "Sheet Pan Fajitas", "Margarita Pizza"];

var desserts = ["Apple Pie", "Lemon Meringue Pie", "Black Forest Cake", "Banana Bread", "Peach Cobbler", "Cheesecake", "Funfetti Cake", "Baklava", "Flan", "Macarons", "Macaroons", "Chocolate Cupcakes", "Pavlova", "Pumpkin Pie", "Key Lime Pie", "Tart Tatin", "Croissants", "Eclairs"];


var cookBtn = document.querySelector(".box1button");
var cookPot = document.querySelector(".cookingPot");
var box2Title = document.querySelector(".box2HolderTitle")
var box2Text = document.querySelector(".box2HolderText")
var clearBtn = document.querySelector(".clearButton")
var radioButtons = document.querySelector("form")
var radioArrayButtons = document.getElementsByName("input1")



cookBtn.addEventListener("click", function () {
  var buttonInputs = document.querySelector("input[name = input1]:checked").value
  if (!buttonInputs) { return
  } else {
hideCookpot();
showBox2Text();
checkRadioValue();
resetRadioButtons();
}
})

function hideCookpot() {
  cookPot.classList.add("hidden");
}

function showBox2Text() {
  box2Title.classList.remove("hidden")
  box2Text.classList.remove("hidden")
  clearBtn.classList.remove("hidden")
}

function checkRadioValue() {
  var buttonInputs = document.querySelector("input[name = input1]:checked").value
  var randomSide = sides[getRandomIndex(sides)]
  var randomMainDish = mains[getRandomIndex(mains)]
  var randomDessert = desserts[getRandomIndex(desserts)]
  if (!buttonInputs) {
    return
  }  if (buttonInputs === "side" ) {
    box2Text.innerText = randomSide
  } else if (buttonInputs === "main") {
    box2Text.innerText = randomMainDish
  } else if (buttonInputs === "dessert") {
    box2Text.innerText = randomDessert
  } else if (buttonInputs === "entire") {
    box2Text.innerText = `${randomMainDish} with a side of ${randomSide} and ${randomDessert}!`
  }
}

function resetRadioButtons() {
  for (var i = 0; i < radioArrayButtons.length; i++) {
   if (radioArrayButtons[i].checked === true);
   radioArrayButtons[i].checked = false;
  }
}

function getRandomIndex(array) {
  return Math.floor(Math.random() * array.length); };
