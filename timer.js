function startTimer(duration, event) {
    var timer = duration, days, hours, minutes, second;
    let id = event.summary + event.start.dateTime
    id = id.replace(' ', '')
    let container = `
    
    `
    console.log(document.getElementById(`days${id}`))
    document.getElementById("eventify-table").append(container)
    console.log(container)
    var interval = setInterval(function () {
        days = parseInt((timer / (24*60*60)), 10);
        hours   = parseInt((timer / (60*60)) - (days*24), 10);
        minutes = parseInt((timer / (60)) - (hours*60) - (days*24*60), 10);
        seconds = parseInt(timer % 60, 10);

        days = days < 10 ? "0" + days : days;
        hours = hours < 10 ? "0" + hours : hours;
        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;

        document.getElementById(`mins${id}`).innerHTML = minutes;
        document.getElementById(`seconds${id}`).innerHTML = seconds;
        document.getElementById(`hours${id}`).innerHTML = hours;
        document.getElementById(`days${id}`).innerHTML = days;


        if (--timer < 0) {
            document.getElementById(`up${id}`).innerHTML = "TIME UP";
            document.getElementById(`days${id}`).innerHTML = "00";
            document.getElementById(`hours${id}`).innerHTML = "00";
            document.getElementById(`mins${id}`).innerHTML = "00";
            document.getElementById(`seconds${id}`).innerHTML = "00";    
            clearInterval(interval);
        } 
    }, 1000);
}
window.onload = function () {  
    // document.getElementById("eventify-table").innerHTML = ""
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
    var remSec = (eventSec-currSec)*0.001
    console.log(remSec)
    var remSecInt = parseInt(remSec)
    console.log(remSecInt)  

    // let t1_day = document.getElementsByClassName("days")[0]
    // let t2_day = document.getElementsByClassName("days")[1]
    // t1_day.innerHTML = "RANDOM"
    // t2_day.innerHTML = "RANDOM"

    // var measure =(d*24*60*60) + (h*60*60) + (m*60) + s;

    // startTimer(remSecInt, t[0].event);
};