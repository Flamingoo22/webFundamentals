

var animalimg = document.querySelector("#fav-animal");  

console.log(animalimg);

function pickcat(element){
    // console.log(element.style);
    // element.style.backgroundColor = "goldenrod";
    element.remove();
    animalimg.src="cat.jpg";

}

function pickdog(element){
    element.classList.add("btn");
    animalimg.src="dog.jpg";
}


function setActive(element) {
    if(element.classList.contains("dark-mode")) {
        element.innerText = "Switch to light mode";
        element.classList.remove("dark-mode");
    } else {
        element.innerText = "Switch to dark mode";
        element.classList.add("dark-mode");
    }
}
