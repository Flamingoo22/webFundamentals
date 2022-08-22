var content = document.querySelector("#outter");

var cookie = document.querySelector("#cookie");

function accept(element){
    content.removeChild(cookie);
}

function log(element){
    if(element.innerText == "Login"){
        element.innerText = "Logout";
    }else{
        element.innerText = "Login";
    }
}

function upload(btn){
    btn.remove();
}

var juniorcount = 0;

function likejunior(like){
    juniorcount ++;
    like.innerText = juniorcount +" likes";
    return;
}

var fluffycount = 0;

function likefluffy(like){
    fluffycount ++;
    like.innerText = fluffycount +" likes";
    return;
}

function change(img){
    img.src = "resources/puppy.jpeg";
}

function playvid(video){
    video.play();
}

function pausevid(video){
    video.pause();
}