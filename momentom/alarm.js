const alarmContainer = document.querySelector('.js-alarm');
const currentTime = alarmContainer.querySelector('h1');



function getAlarm(){
var setTimes = [];
var setTimes = document.getElementsByClassName('WakeUpTime');
const date = new Date();
const hours = date.getHours();
const minutes = date.getMinutes();
const seconds = date.getSeconds();
const current = `${hours < 10 ? `0${hours}` : hours}:${minutes < 10 ? `0${minutes}` : minutes}:${seconds < 10 ? `0${seconds}` : seconds}`;

for(var i=0; i < setTimes.length; i++){
    if(current === setTimes.item(i).value + ':00'){
        window.open('popup.html');
    }
}
}

function getTime(){
const date = new Date();
const hours = date.getHours();
const minutes = date.getMinutes();
const seconds = date.getSeconds();
currentTime.innerText =
`${hours < 10 ? `0${hours}` : hours}:${minutes < 10 ? `0${minutes}` : minutes}:${seconds < 10 ? `0${seconds}` : seconds}`;
}


function init(){
getTime();
setInterval(getTime, 1000);

alarm = setInterval(getAlarm, 1000);
}
init();
