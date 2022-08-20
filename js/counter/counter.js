var count = 1;

function add1(){
    count++;
    countElement.innerText = "The count is "+count;
    console.log(count)
}

var countElement = document.querySelector("#count");

console.log(countElement);