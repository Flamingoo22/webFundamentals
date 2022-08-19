
// var date=new Time();
// document.getElementById('date-time').textContent = date;

// document.getElementById("date").innerHTML = Date();


date = new Date();
year = date.getFullYear();
month = date.getMonth();
day = date.getDate();

var months = [ "January", "February", "March", "April", "May", "June",
"July", "August", "September", "October", "November", "December" ];

month = months[month];

document.getElementById("date").innerHTML = month + " " + day + "," + year;


for(let i =0; i< arr.length;i++){
    arr[i,arr.length-1-i]=arr[arr.length-1-i,i];
}