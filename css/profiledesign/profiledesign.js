// var profile = ;

function changename(element){
    document.querySelector("h2").innerText="Gavin Thomas";
    document.querySelector("#profilepic").src="images/gavin-thomas.jpg";
}

var requests = document.getElementById("numrequest").innerText;

var connectionnum = document.getElementById("numconnection").innerText;

function addtod(element){
    document.getElementById("conlist").appendChild(document.getElementById("try"));
    document.getElementById("requestblock").removeChild(document.getElementById("tod"));

    if(requests == 2){
        document.getElementById("numrequest").innerText --;
        document.getElementById("numconnection").innerText++;
        requests--;
    }else if(requests == 1){
        document.getElementById("numrequest").innerText --;
        document.getElementById("numconnection").innerText++;
        requests--;
    }
    return requests;
}

function removetod(element){
    document.getElementById("requestblock").removeChild(document.getElementById("tod"));

    if(requests == 2){
        document.getElementById("numrequest").innerText --;
        requests--;
    }else if(requests == 1){
        document.getElementById("numrequest").innerText --;
        requests--;
    }
    return requests;
}

function addphil(element){
    document.getElementById("conlist").appendChild(document.getElementById("try2"));
    document.getElementById("requestblock").removeChild(document.getElementById("phil"));

    if(requests == 2){
        document.getElementById("numrequest").innerText --;
        document.getElementById("numconnection").innerText++;
        requests--;
    }else if(requests == 1){
        document.getElementById("numrequest").innerText --;
        document.getElementById("numconnection").innerText++;
        requests--;
    }
    return requests;
}

function removephil(element){
    document.getElementById("requestblock").removeChild(document.getElementById("phil"));
    
    if(requests == 2){
        document.getElementById("numrequest").innerText --;
        requests--;
    }else if(requests == 1){
        document.getElementById("numrequest").innerText --;
        requests--;
    }
    return requests;
}