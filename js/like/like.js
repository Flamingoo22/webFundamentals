var count=0;

function add(element){
    count++;
    element.style.backgroundColor="goldenrod";
    element.classList.add("btn");
    document.querySelector("#header>p").innerText = count + " likes"
}