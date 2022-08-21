var nameSpan = document.querySelector("#name");
var foodToOrder = "Pizza";


function setname(element){
    console.log(element.value);
    nameSpan.innerText = element.value;
}

function pickFood(element){
    console.log("the food is " + element.value);
    foodToOrder = element.value;
}

// function order(){
//     alert("Ordering a "+ foodToOrder);
// }
// function codeToRunLater(){
//     for(var i =0; i<111; i++){
//         console.log("running: " +i);
//     }
// }

// setTimeout(codeToRunLater, 1000);

// console.log("END");