function greetsomeone(name){   //name is a parameter, parameter is a placeholder variable for any data that function needs to run
    console.log("Hello " + name + "!");
}

//greetsomeone(john);
//greetsomeone(sean);   //the info. that we feed to function when we called the function is called Argumet, e.g. john , sean


function addNum(n1,n2){
    console.log(n1+n2); //console.log just prints something to the terminal
    return n1+n2; //return outputs (or give us back) some data. It will also exit the function after the return statement.
    console.log(n1,n2)
}

let newNum = addNum(5,2) + 100;

console.log("new number is " + newNum);

//The value of a function call is whatever that function call RETURN!!