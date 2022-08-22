// function custom() {
//     // we can include more code here if we want to
//     console.log("this message is coming from script.js");
// }

// function example(element) {
//     console.log("element clicked", element);
// }
// function turnOff(element) {
//     element.innerText = "Off";
// }
// function hide(element) {
//     element.remove();
// }

// function addshadow(element){
//     alert("mouseover");
// }
// function removeshadow(element){
//     alert("mouseout");
// }
var colors = document.querySelectorAll(".color");
    
function applyColors(){
    for(var i=0; i<colors.length; i++) {
        colors[i].style.color = colors[i].innerText;
    }
}
