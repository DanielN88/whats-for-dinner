var sides = ["Miso Glazed Carrots", "Coleslaw", "Garden Salad", "Crispy Potatoes", "Sweet Potato Tots", "Coconut Rice", "Caeser Salad", "Shrimp Summer Rolls", "Garlic Butter Mushrooms", "Hush Puppies"];

var mains = ["Spaghetti and Meatballs", "Pineapple Chicken", "Shakshuka", "Thai Yellow Curry", "Bibimbap", "Chicken Parmesean", "Butternut Squash Soup", "BBQ Chicken Burgers", "Ramen", "Empanadas", "Chicken Fried Rice", "Sheet Pan Fajitas", "Margarita Pizza"];

var desserts = ["Apple Pie", "Lemon Meringue Pie", "Black Forest Cake", "Banana Bread", "Peach Cobbler", "Cheesecake", "Funfetti Cake", "Baklava", "Flan", "Macarons", "Macaroons", "Chocolate Cupcakes", "Pavlova", "Pumpkin Pie", "Key Lime Pie", "Tart Tatin", "Croissants", "Eclairs"];

var sideBtn = document.querySelector("sideButton");
var mainBtn = document.querySelector("mainButton");
var dessertBtn = document.querySelector("dessertButton");
var entireBtn = document.querySelector("entireButton");
var cookBtn = document.querySelector(".box1button");
var cookPot = document.querySelector(".cookingPot");
var box2Title = document.querySelector(".box2HolderTitle")
var box2Text = document.querySelector(".box2HolderText")
var clearBtn = document.querySelector(".clearButton")

cookBtn.addEventListener("click", function () {
hideCookpot();
showBox2Text();
})

foodValue = function returnFoodVaue() {

}

function hideCookpot() {
  cookPot.classList.add("hidden");
}

function showBox2Text() {
  box2Title.classList.remove("hidden")
  box2Text.classList.remove("hidden")
  clearBtn.classList.remove("hidden")
}
