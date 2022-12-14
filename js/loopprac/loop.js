function alwaysHungry(arr) {
    // your code here
    var yumcount=0;
    for(var i = 0; i<arr.length; i++){
        if(arr[i]=="food"){
            console.log("yummy");
        }else{
            return console.log("I'm hungry");
        }
    }
}

alwaysHungry([3.14, "food", "pie", true, "food"]);
// this should console log "yummy", "yummy"
alwaysHungry([4, 1, 5, 7, 2]);
// this should console log "I'm hungry"






function highPass(arr, cutoff) {
    var filteredArr = [];
    // your code here
    var i = 0;
    while(i < arr.length){
        if(arr[i] > cutoff){
            filteredArr.push(arr[i]);
        }
        i++;
    }
    return filteredArr;
}
var result = highPass([6, 8, 3, 10, -2, 5, 9], 5);
console.log(result); // we expect back [6, 8, 10, 9]






function betterThanAverage(arr) {
    var average = arr.reduce((a,b)=>(a+b),0)/arr.length;
    // calculate the average
    var count = 0
    for (i=0; i<arr.length;i++){
        if(arr[i]>average){
            count++;
        }
    }
    // count how many values are greated than the average
    return count;
}
var result = betterThanAverage([6, 8, 3, 10, -2, 5, 9]);
console.log(result); // we expect back 4





function reverse(arr) {
    // your code here
    // arr = arr.reverse();
    for(i=0; i<arr.length/2; i++){
        left = arr[i];
        arr[i]=arr[arr.length-1-i];
        arr[arr.length-1-i] = left;
    }
    return arr;
}
var result = reverse(["a", "b", "c", "d", "e"]);
console.log(result); // we expect back ["e", "d", "c", "b", "a"]




function fibonacciArray(n) {
    // the [0, 1] are the starting values of the array to calculate the rest from
    var fibArr = [0, 1];
    var i=0;
    while(fibArr.length<n){
        var y = fibArr[i]+fibArr[i+1];
        fibArr.push(y);
        i++;
    }
    // your code here
    return fibArr;
}

var result = fibonacciArray(10);
console.log(result); // we expect back [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
