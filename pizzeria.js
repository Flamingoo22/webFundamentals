function sandwichFactory(crust, protein, cheese, toppings,sauce) {
    var sandwich = {};
    sandwich.protein = protein;
    sandwich.crust = crust;
    sandwich.cheese = cheese;
    sandwich.toppings = toppings;
    sandwich.sauce = sauce;
    return sandwich;
}

var s1 = sandwichFactory("deep fish", "traditional", "mozzarella", ["pepperoni", "sausage"],"alfredo");
console.log(s1);

var s2 = sandwichFactory("deep fish", "hand tossed", ["mozzarella", "feta"], ["mushrooms", "olives", "onions"],"marinara");

console.log(s2);

function createrandompizza(bread, protein,crust, cheese, toppings,sauces) {
    var sandwich = {};
    sandwich.bread = bread[Math.floor(Math.random()*5)];
    sandwich.protein = protein[Math.floor(Math.random()*5)];
    sandwich.crust = crust[Math.floor(Math.random()*5)];
    sandwich.cheese = cheese[Math.floor(Math.random()*5)];
    sandwich.toppings = toppings[Math.floor(Math.random()*5)];
    sandwich.sauce = sauces[Math.floor(Math.random()*5)];
    return sandwich;
}

var bread = ["white bread", "sandwich bread", "French bread", "Italian bread", "buns"];
var protein = ["chicken sausage", "ground beef", "steak", "italian sausage","chicken breast"];
var crust = ["original", "pan", "thin ","n-crispy","hand-tossed"];
var cheese =["blue", "hard", "pasta filata", "processed", "semi-hard"];
var toppings =["Pepperoni","Mushroom","Extra cheese","Sausage","Onion"];
var sauces = ["Pesto","White Garlic Sauce","Garlic Ranch Sauce","Hummus","Buffalo Sauce"];

let randompizza =createrandompizza(bread, protein,crust, cheese, toppings,sauces);

console.log(randompizza);

console.log(createrandompizza(bread, protein,crust, cheese, toppings,sauces));


