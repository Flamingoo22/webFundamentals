function getSecondsSinceStartOfDay() {
    return new Date().getSeconds() + 
        new Date().getMinutes() * 60 + 
        new Date().getHours() * 3600;
}

var seconds = document.querySelector("#seconds");

var minutes = document.querySelector("#minutes");

var hours = document.querySelector("#hour");

setInterval( function() {
    var time = getSecondsSinceStartOfDay();
    console.log(time);
      // your code here
    seconds.style.transform = "rotate("+ time +"deg)";
    minutes.style.transform = "rotate("+ time/60 +"deg)";
    hours.style.transform = "rotate("+ time/3600 +"deg)";
    
    }, 1000);
