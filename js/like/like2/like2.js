var countneil=9;
var countnicole =13;
var countjim=9;

function addneil(element){
    countneil++;
    element.style.backgroundColor="goldenrod";
    document.querySelector("#neil").innerText = (countneil + " likes");
}
function addnicole(element){
    countnicole++;
    element.style.backgroundColor="goldenrod";
    document.querySelector("#nicole").innerText = (countnicole + " likes");
}
function addjim(element){
    countjim++;
    element.style.backgroundColor="goldenrod";
    document.querySelector("#jim").innerText = (countjim + " likes");
}