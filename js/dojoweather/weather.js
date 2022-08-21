function removecookie(element){
    document.getElementById("content").removeChild(document.getElementById("cookie"));
}

var hot = document.querySelectorAll(".hot");

function tempoptions(element){
    for(var i=0; i< hot.length; i++){
        if(element.value=="fahrenheit"){
            hot[i].innerText = Math.round(((hot[i].innerText)*9/5)+32);
        }else if(element.value=="celsius"){
            hot[i].innerText = Math.round(((hot[i].innerText)-32)*5/9);
        }
    }
}

function load(element){
    alert("Loading weather report");
}