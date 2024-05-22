const hrs = document.getElementById("hrs");
const mins = document.getElementById("min");
const secs = document.getElementById("sec");
const ampm = document.getElementById("ampm");
const day = document.getElementById("day");

console.log("Main Thread");

// call async every 1 sec
setInterval(() => {
    
    let currentDateAndTime = new Date();
    let currentHrs = currentDateAndTime.getHours();
    let currentMins = currentDateAndTime.getMinutes();
    let currentSecs = currentDateAndTime.getSeconds();

    if (currentHrs > 12) {
        
        hrs.innerHTML = new String(currentHrs - 12).padStart(2, 0);
        ampm.innerHTML = "PM";
    } else {

        hrs.innerHTML = new String(currentHrs).padStart(2, 0);
        ampm.innerHTML = "AM";
    }
    mins.innerHTML = new String(currentMins).padStart(2, 0);
    secs.innerHTML = new String(currentSecs).padStart(2, 0);


}, 1000);

console.log("Main Thread End");