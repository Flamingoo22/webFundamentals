// var favfoods = ["calamari","pho","pizza","sushi","medium-rare steak","tacos","korean bbq", "chipotle"];
// //

// //print each and every value in this array of favFoods

// for(var i=0; i<favfoods.length;i++){
//     //if current food item is sushi, then print"inflation doe". otherwise print the food item
//     if (favfoods[i] == "sushi"){
//         favfoods[i]="inflation doe";
//     }
//     console.log(favfoods[i])
// }


// var isSunny = true;
// var temperature = 45; // let's assume degrees Fahrenheit
// var isRaining = false;
// var whatToBring = "I should bring: ";
    
// if(isSunny) {
//     whatToBring += "sunglasses, ";
// }
// if(temperature < 50) {
//     whatToBring += "a coat, ";
// }
// if(isRaining) {
//     whatToBring += "an umbrella, ";
// }
// whatToBring += "and a smile!";
    
// console.log(whatToBring);

var countPositives = 0;
var numbers = [3, 4, -2, 7, 16, -8, 0];
    
// your code here!
for(var i=0; i<numbers.length;i++){
    if(numbers[i]>0){
        countPositives+=1;
    }
}
console.log("there are " + countPositives + " positive values");
