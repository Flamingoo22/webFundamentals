
var display = document.querySelector("#display");

var opt = document.querySelector(".operator")


var num = [];

var int = [];

var ans = [];


function press(x){
    num+= x;
    display.innerText = num;
    return int.push(parseFloat(display.innerText));
} 

function setOP(y){
    ans.push(int[int.length-1]);
    num = [];
    display.innerText= num;
    return ans.push(y);
}


function clr(){
    num = [];
    int = [];
    ans = [];
    display.innerText = ans;
    return;
}

function calculate(){
    ans.push(int[int.length-1]);
    console.log(int);
    console.log(ans);
    var final = eval(ans.join(''));
    display.innerText = Math.round(final*1000)/1000;
    console.log(final);
    num = [];
    int = [];
    ans = [];
    ans.push(final);
    return;
}