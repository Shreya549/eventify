function startTimer(duration,display) {
    var timer = duration, days, hours, minutes, second;

    var interval = setInterval(function () {
        days = parseInt((timer / (24*60*60)), 10);
        hours   = parseInt((timer / (60*60)) - (days*24), 10);
        minutes = parseInt((timer / (60)) - (hours*60) - (days*24*60), 10);
        seconds = parseInt(timer % 60, 10);

        days = days < 10 ? "0" + days : days;
        hours = hours < 10 ? "0" + hours : hours;
        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;

        document.getElementById("mins").innerHTML = minutes;
        document.getElementById("seconds").innerHTML = seconds;
        document.getElementById("hours").innerHTML = hours;
        document.getElementById("days").innerHTML = days;

        if (--timer < 0) {
            document.getElementById("up").innerHTML = "TIME UP";
            document.getElementById("days").innerHTML = "00";
            document.getElementById("hours").innerHTML = "00";
            document.getElementById("mins").innerHTML = "00";
            document.getElementById("seconds").innerHTML = "00";    
            clearInterval(interval);
        } 
    }, 1000);
}
window.onload = function () {  
    let arr2 = localStorage.getItem("arr")
    let t = JSON.parse(arr2 || [])
    // for(i = 0; i < t.length; i++)
    // {
    //   console.log(t[i].event)
    // } 
    console.log(t[0].event.summary)
    console.log(t[0].event.start.dateTime)


    // d = parseInt(d)
    // h = parseInt(h)
    // m = parseInt(m)
    // s = parseInt(s)

    var time = t[0].event.start.dateTime
    console.log(time)
    var eventTime = new Date(time);
    var eventSec = eventTime.getTime();
    var currTime = new Date();
    var currSec = currTime.getTime();
    console.log(eventSec*0.001)
    console.log(currSec*0.001)
    var remSec = eventSec-currSec
    console.log(remSec*0.001)
    var remSecInt = parseInt(remSec)
    console.log(remSecInt*0.001)

    // var measure =(d*24*60*60) + (h*60*60) + (m*60) + s;

    display = document.querySelector('#time');
    startTimer(remSecInt,display);
};