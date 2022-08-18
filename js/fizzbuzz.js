
function fizzbuzz(){
    var arr=[]
    for(var x=1;x<16;x++){
        arr.push(x);
    }
    for(var i=0;i<arr.length;i++){
        if(arr[i]%15==0){
            console.log("BuzzFizz")
        }else if(arr[i]%3==0){
            console.log("Fizz");
        }else if(arr[i]%5==0){
            console.log("Buzz");
        }else{
            console.log(arr[i])
        }
    }
}

fizzbuzz()