let arraySound= ["images/speaker-off.png","images/speaker-on.png"]
const soundButton = document.querySelector("#button-sound");
let imageSound = document.querySelector('#sound-control');

let arrayMusic= ["images/music-off.png","images/music-on.png"]
const musicButton = document.querySelector("#button-music");
let imageMusic = document.querySelector('#music-control');

const musicPlay = document.querySelector("#music");
let isplaying = 1;

let counterSound=0;
let counterMusic=0;

soundButton.onclick = function () {
    imageSound.src=arraySound[counterSound % arraySound.length];
    counterSound+=1;
}

musicButton.onclick = function () {
    imageMusic.src=arrayMusic[counterMusic % arrayMusic.length];
    counterMusic+=1;
    if(isplaying)
    {
        musicPlay.pause();
        isplaying=0;
    }
    else
    {
        musicPlay.play();
        isplaying=1;
    }
}
