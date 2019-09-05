function startTimer(event) {
    var timer, days, hours, minutes, second;

        let summary = document.getElementsByClassName("up")
        let d = document.getElementsByClassName("days")
        let h = document.getElementsByClassName("hours")
        let m = document.getElementsByClassName("mins")
        let s = document.getElementsByClassName("seconds")

        for (let i in event) {
            summary[i].innerHTML = event[i].event.summary
        }

    var interval = setInterval(function () {
        for (let i in event) 
        {
            var time = event[i].event.start.dateTime || event[i].event.start.date
            console.log(time)
            var eventTime = new Date(time);
            console.log(eventTime)
            var eventSec = eventTime.getTime();
            var currTime = new Date();
            var currSec = currTime.getTime();
            console.log(eventSec*0.001)
            console.log(currSec*0.001)
            var remSec = (eventSec-currSec)*0.001
            console.log(remSec)
            var timer = parseInt(remSec)
        
        days = parseInt((timer / (24*60*60)), 10);
        hours   = parseInt((timer / (60*60)) - (days*24), 10);
        minutes = parseInt((timer / (60)) - (hours*60) - (days*24*60), 10);
        seconds = parseInt(timer % 60, 10);

        days = days < 10 ? "0" + days : days;
        hours = hours < 10 ? "0" + hours : hours;
        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;

            if (days < 0)
                        days = 0;
            if (hours < 0)
                        hours = 0
            if (minutes < 0)
                    minutes = 0
            if (seconds < 0)
                        seconds = 0
        if (parseInt(days)  == 0 && parseInt(hours) == 0 && parseInt(minutes) == 0 && parseInt(seconds) == 0) {
                summary[i].innerHTML = "TIME UP!!"
            }
    console.log(seconds)
        d[i].innerHTML = parseInt(days)
        h[i].innerHTML = parseInt(hours)
        m[i].innerHTML = parseInt(minutes)
        s[i].innerHTML = parseInt(seconds)



        // if (--timer < 0) {
        //     // document.getElementById(`up${id}`).innerHTML = "TIME UP";
        //     // document.getElementById(`days${id}`).innerHTML = "00";
        //     // document.getElementById(`hours${id}`).innerHTML = "00";
        //     // document.getElementById(`mins${id}`).innerHTML = "00";
        //     // document.getElementById(`seconds${id}`).innerHTML = "00";    
        //      d[i].innerHTML = "00"
        // h[i].innerHTML = "00"
        // m[i].innerHTML = "00"
        // s[i].innerHTML = "00"
        // summary[i].innerHTML = "TIME UP!"
        //     //clearInterval(interval);
        // } 
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

    // var time = t[2].event.start.date
    // console.log(time)
    // var eventTime = new Date(time);
    // console.log(eventTime)
    // var eventSec = eventTime.getTime();
    // var currTime = new Date();
    // var currSec = currTime.getTime();
    // console.log(eventSec*0.001)
    // console.log(currSec*0.001)
    // var remSec = (eventSec-currSec)*0.001
    // console.log(remSec)
    // var remSecInt = parseInt(remSec)
    // console.log(remSecInt)  

    // let t1_day = document.getElementsByClassName("days")[0]
    // let t2_day = document.getElementsByClassName("days")[1]
    // t1_day.innerHTML = "RANDOM"
    // t2_day.innerHTML = "RANDOM"

    startTimer(t);
};