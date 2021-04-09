const birthday = new Date(2021,3,23);
const numberdays = document.getElementById("dni");
const numberhours = document.getElementById("godziny");
const numberminutes = document.getElementById("minuty");
const numberseconds = document.getElementById("sekundy");

const descdays = document.getElementById("opis-dni");
const deschours = document.getElementById("opis-godziny");
const descminutes = document.getElementById("opis-minuty");
const descseconds = document.getElementById("opis-sekundy");

function countdown(){
    let currentdate = new Date();

    let diff = birthday-currentdate;
    let days = Math.floor(diff/1000/60/60/24);
    numberdays.textContent=days;
    if(days==1)
    {
        descdays.textContent="Day"
    }
    else
    {
        descdays.textContent="Days"   
    }

    diff = diff - days*1000*60*60*24;
    let hours = Math.floor(diff/1000/60/60);
    hours = (hours <10 && hours>-1?'0':'')+hours;
    numberhours.textContent=hours;
    if(hours==1)
    {
        deschours.textContent="Hour"
    }
    else
    {
        deschours.textContent="Hours"   
    }

    diff = diff - hours*1000*60*60;
    let minutes = Math.floor(diff/1000/60);
    minutes = (minutes <10 && minutes>-1?'0':'')+minutes;
    numberminutes.textContent=minutes;
    if(minutes==1)
    {
        descminutes.textContent="Minute"
    }
    else
    {
        descminutes.textContent="Minutes"   
    }

    diff = diff - minutes*1000*60;
    let seconds = Math.floor(diff/1000);
    seconds = (seconds <10 && seconds>-1?'0':'')+seconds;
    numberseconds.textContent=seconds;
    if(seconds==1)
    {
        descseconds.textContent="Second"
    }
    else
    {
        descseconds.textContent="Seconds"   
    }

}

let intervalId = window.setInterval(function(){
    countdown();
},1000);
